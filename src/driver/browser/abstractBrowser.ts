import path from 'path';
import puppeteer, { Browser, ConnectOptions, DownloadPolicy } from 'rebrowser-puppeteer-core';
import * as ChromeLauncher from 'chrome-launcher';
import { pageController, PageWithCursor } from '../puppeteer/pageController';
import { Proxy } from '../../proxy/abstractProxy';
import { AbstractDriver } from '../abstractDriver';

let Xvfb;
try {
  Xvfb = require('xvfb');
} catch (err) {
  console.error('xvfb is not installed. If you are running on a Linux platform, please install it with the following command `sudo apt-get install xvfb`');
  console.error(err);
}

let xvfbsession: any = null;

export interface Options {
  args: string[];
  headless: boolean;
  customConfig?: ChromeLauncher.Options;
  turnstile: boolean;
  connectOption: ConnectOptions;
  disableXvfb: boolean;
  ignoreAllFlags: boolean;
}


export abstract class AbstractBrowser {

  static PARENT_DOWNLOAD_PATH = path.resolve(__dirname, '../../media/download');
  protected static instanceCounter = 0;

  /**
   * Gets the Puppeteer configuration for the specified locale.
   * @param locale The locale to configure the browser for.
   * @returns The Puppeteer configuration object for the specified locale.
   */
  private getPuppeteerConfig(locale: string): Options {
      return {
          args: ['--start-maximized', `--lang=${locale}`, `--accept-lang=${locale}`],
          turnstile: true,
          headless: false,
          customConfig: {
              prefs: {
                  download: {
                      open_pdf_in_system_reader: false,
                      prompt_for_download: false,
                  },
                  plugins: {
                      always_open_pdf_externally: true,
                  },
              },
          },
          connectOption: {
              defaultViewport: {
                  width: AbstractDriver.VIEWPORT_WIDTH,
                  height: AbstractDriver.VIEWPORT_HEIGHT,
              },
          },
          disableXvfb: false,
          ignoreAllFlags: false,
      };
  }

  protected ip: string;
  protected downloadPath: string;

  protected port: number|undefined;
  protected wsid: string|undefined;
  protected _puppeteerBrowser: Browser|undefined;

  /**
   * Constructs a new instance of the AbstractBrowser class.
   * @param ip The IP address of the browser instance.
   * @param downloadPath The path where downloaded files will be stored.
   */
  constructor(ip: string, downloadPath: string) {
    this.ip = ip;
    this.downloadPath = downloadPath;
  }

  /**
   * Gets the URL of the browser instance.
   * @returns The URL of the browser instance if the port is defined, otherwise undefined.
   */
  get url(): string|undefined {
      return this.port ? `http://${this.ip}:${this.port}` : undefined;
  }

  /**
   * Gets the WebSocket URL of the browser instance.
   * @returns The WebSocket URL of the browser instance if the WebSocket ID is defined, otherwise undefined.
   */
  get wsUrl(): string|undefined {
      return this.wsid ? `ws://${this.ip}:${this.port}/devtools/browser/${this.wsid}` : undefined;
  }

  /**
   * Gets the Puppeteer browser instance.
   * @returns The Puppeteer browser instance.
   */
  get puppeteerBrowser(): Browser {
    if (!this._puppeteerBrowser) {
      throw new Error('Browser is not connected. Please call connect() method first.');
    }
    return this._puppeteerBrowser;
  }

  /**
   * Connects to the browser with the specified locale and proxy settings.
   * @param locale The locale to configure the browser for.
   * @param proxy The proxy settings to use for the browser connection, or null if no proxy is used.
   * @returns The page instance with cursor support after connecting to the browser.
   */
  async connect(
    locale: string,
    proxy: Proxy | null,
  ): Promise<PageWithCursor> {
    const dynamicImport = new Function('specifier', 'return import(specifier)');
    const { Launcher } = await dynamicImport('chrome-launcher');

    const puppeteerConfig = this.getPuppeteerConfig(locale);

    if (process.platform === 'linux' && puppeteerConfig.disableXvfb === false && !xvfbsession) {
      try {
        xvfbsession = new Xvfb({
          silent: true,
          xvfb_args: ['-screen', '0', '1920x1080x24', '-ac'],
        });
        xvfbsession.startSync();
      } catch (err) {
        console.error('You are running on a Linux platform but xvfb cannot start. Please install it with the following command `sudo apt-get install xvfb`');
        console.error(err);
        console.error('Fallback to headless mode. The browser can be captured, but it can still be used for automation tasks.');
        puppeteerConfig.headless = true; // Fallback to headless mode if xvfb is not available
      }
    }

    let chromeFlags;
    if (puppeteerConfig.ignoreAllFlags === true) {
      chromeFlags = [
        ...puppeteerConfig.args,
        ...(puppeteerConfig.headless !== false ? [`--headless=${puppeteerConfig.headless}`] : []),
        ...(proxy && proxy.host && proxy.port
          ? [`--proxy-server=${proxy.host}:${proxy.port}`]
          : []),
      ];
    } else {
      // Default flags: https://github.com/GoogleChrome/chrome-launcher/blob/main/src/flags.ts
      const flags = Launcher.defaultFlags();
      // Add AutomationControlled to "disable-features" flag
      const indexDisableFeatures = flags.findIndex((flag) => flag.startsWith('--disable-features'));
      flags[indexDisableFeatures] = `${flags[indexDisableFeatures]},AutomationControlled`;
      // Remove "disable-component-update" flag
      const indexComponentUpdateFlag = flags.findIndex((flag) => flag.startsWith('--disable-component-update'));
      flags.splice(indexComponentUpdateFlag, 1);
      chromeFlags = [
        ...flags,
        ...puppeteerConfig.args,
        ...(puppeteerConfig.headless !== false ? [`--headless=${puppeteerConfig.headless}`] : []),
        ...(proxy && proxy.host && proxy.port
          ? [`--proxy-server=${proxy.host}:${proxy.port}`]
          : []),
        '--no-sandbox',
        '--disable-dev-shm-usage',
      ];
    }

    const downloadPath = await this.launch({
      ignoreDefaultFlags: true,
      chromeFlags,
      ...puppeteerConfig.customConfig,
    });

    
   puppeteerConfig.connectOption['downloadBehavior'] = {
          policy: 'allow' as DownloadPolicy,
          downloadPath,
      },

    this._puppeteerBrowser = await puppeteer.connect({
      browserURL: this.wsUrl ? undefined : this.url,            // Use browserURL if wsUrl is not available, for local Chrome
      browserWSEndpoint: this.wsUrl ? this.wsUrl : undefined,   // Use browserWSEndpoint if wsUrl is available, for remote Chrome
      ...puppeteerConfig.connectOption,
    });

    const [page] = await this._puppeteerBrowser.pages();

    const pageControllerConfig = {
      browser: this._puppeteerBrowser,
      page,
      proxy,
      turnstile: puppeteerConfig.turnstile,
      locale,
    };

    const pageWithCursor = await pageController({
      ...pageControllerConfig,
      killProcess: true,
      abstractBrowser: this,
    });

    this._puppeteerBrowser.on('targetcreated', async (target) => {
      if (target.type() === 'page') {
        let newPage = await target.page();
        if(newPage !== null) {
          pageControllerConfig.page = newPage;
          newPage = await pageController({
            ...pageControllerConfig,
            killProcess: false,
          });
        }
      }
    });

    return pageWithCursor;
  }

  /**
   * Launches the browser with the specified options.
   * @param options The options to use when launching the browser.
   * @returns The download path for the browser instance.
   */
  abstract launch(options: any): Promise<string>;

  /**
   * Closes the browser instance.
   */
  abstract close(): Promise<void>;
 
  /**
   * Gets all the downloaded files in the download folder as base64 and remove them.
   * @param clean If true, the files will be removed from the download folder after being read. If false, the files will not be removed. Default is true.
   * @returns An array of base64 strings representing the downloaded files.
   */
  abstract getDownloadedFiles(clean: boolean): Promise<string[]>;
}
