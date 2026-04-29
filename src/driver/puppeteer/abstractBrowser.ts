import fs from 'fs';
import path from 'path';
import puppeteer, { Browser, ConnectOptions, DownloadPolicy, Page } from "rebrowser-puppeteer-core";
import * as ChromeLauncher from 'chrome-launcher';
import { pageController, PageWithCursor } from "./pageController";
import { Proxy } from "../../proxy/abstractProxy";
import { Driver } from '../driver';

let Xvfb;
try {
  Xvfb = require("xvfb");
} catch (err) {
  console.error("xvfb is not installed. If you are running on a Linux platform, please install it with the following command `sudo apt-get install xvfb`");
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

  private getPuppeteerConfig(downloadPath: string): Options {
      return {
          args: ["--start-maximized"],
          turnstile: true,
          headless: false,
          customConfig: {
              prefs: {
                  download: {
                      open_pdf_in_system_reader: false,
                      prompt_for_download: false
                  },
                  plugins: {
                      always_open_pdf_externally: true
                  }
              }
          },
          connectOption: {
              defaultViewport: {
                  width: Driver.VIEWPORT_WIDTH,
                  height: Driver.VIEWPORT_HEIGHT,
              }
          },
          disableXvfb: false,
          ignoreAllFlags: false
      }
  };

  protected ip: string;
  protected downloadPath: string;

  protected port: number|undefined;
  protected wsid: string|undefined;
  protected _puppeteerBrowser: Browser|undefined;

  constructor(ip: string, downloadPath: string) {
    this.ip = ip;
    this.downloadPath = downloadPath;
  }

  get url(): string|undefined {
      return this.port ? `http://${this.ip}:${this.port}` : undefined;
  }

  get wsUrl(): string|undefined {
      return this.wsid ? `ws://${this.ip}:${this.port}/devtools/browser/${this.wsid}` : undefined;
  }

  get puppeteerBrowser(): Browser {
    if (!this._puppeteerBrowser) {
      throw new Error("Browser is not connected. Please call connect() method first.");
    }
    return this._puppeteerBrowser;
  }

  async connect(
    proxy: Proxy | null
  ): Promise<PageWithCursor> {
    const dynamicImport = new Function('specifier', 'return import(specifier)');
    const { Launcher } = await dynamicImport('chrome-launcher');

    let puppeteerConfig = this.getPuppeteerConfig(this.downloadPath);

    if (process.platform === "linux" && puppeteerConfig.disableXvfb === false && !xvfbsession) {
      try {
        xvfbsession = new Xvfb({
          silent: true,
          xvfb_args: ["-screen", "0", "1920x1080x24", "-ac"],
        });
        xvfbsession.startSync();
      } catch (err) {
        console.error("You are running on a Linux platform but xvfb cannot start. Please install it with the following command `sudo apt-get install xvfb`");
        console.error(err);
        console.error("Fallback to headless mode. The browser can be captured, but it can still be used for automation tasks.");
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
        "--no-sandbox",
        "--disable-dev-shm-usage",
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

    let [page] = await this._puppeteerBrowser.pages();

    let pageControllerConfig = {
      browser: this._puppeteerBrowser,
      page,
      proxy,
      turnstile: puppeteerConfig.turnstile,
    };

    let pageWithCursor = await pageController({
      ...pageControllerConfig,
      killProcess: true,
      abstractBrowser: this,
    });

    this._puppeteerBrowser.on("targetcreated", async (target) => {
      if (target.type() === "page") {
        let newPage = await target.page();
        if(newPage !== null) {
          pageControllerConfig.page = newPage;
          newPage = await pageController({
            ...pageControllerConfig,
            killProcess: false
          });
        }
      }
    });

    return pageWithCursor;
  }

  abstract launch(options: any): Promise<string>;
  abstract close(): Promise<void>;

  /**
   * Get all the downloaded files in the download folder as base64 and remove them.
   * @returns An array of base64 strings representing the downloaded files.
   */
  abstract getDownloadedFiles(): Promise<string[]>;
}
