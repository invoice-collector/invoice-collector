import puppeteer, { Browser, ConnectOptions } from "rebrowser-puppeteer-core";
import * as ChromeLauncher from 'chrome-launcher';
import { pageController, PageWithCursor } from "./pageController";
import { Proxy } from "../../proxy/abstractProxy";

let Xvfb;
try {
  Xvfb = require("xvfb");
} catch (err) {
  console.error("xvfb is not installed. If you are running on a Linux platform, please install it with the following command `sudo apt-get install xvfb`");
  console.error(err);
}

let xvfbsession: any = null;

export interface Options {
  args?: string[];
  headless?: boolean;
  customConfig?: ChromeLauncher.Options;
  proxy?: Proxy;
  turnstile?: boolean;
  connectOption?: ConnectOptions;
  disableXvfb?: boolean;
  ignoreAllFlags?: boolean;
  remoteChrome?: boolean;
}


export abstract class AbstractBrowser {

  protected ip: string;
  protected port: number|undefined;
  protected wsid: string|undefined;
  protected _puppeteerBrowser: Browser|undefined;

  constructor(ip: string) {
    this.ip = ip;
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

  async connect({
    args = [],
    headless = false,
    customConfig = {},
    proxy = undefined,
    turnstile = false,
    connectOption = {},
    disableXvfb = false,
    ignoreAllFlags = false
  }: Options = {}): Promise<PageWithCursor> {
    const dynamicImport = new Function('specifier', 'return import(specifier)');
    const { Launcher } = await dynamicImport('chrome-launcher');

    if (process.platform === "linux" && disableXvfb === false && !xvfbsession) {
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
        headless = true; // Fallback to headless mode if xvfb is not available
      }
    }

    let chromeFlags;
    if (ignoreAllFlags === true) {
      chromeFlags = [
        ...args,
        ...(headless !== false ? [`--headless=${headless}`] : []),
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
        ...args,
        ...(headless !== false ? [`--headless=${headless}`] : []),
        ...(proxy && proxy.host && proxy.port
          ? [`--proxy-server=${proxy.host}:${proxy.port}`]
          : []),
        "--no-sandbox",
        "--disable-dev-shm-usage",
      ];
    }

    await this.launch({
      ignoreDefaultFlags: true,
      chromeFlags,
      ...customConfig,
    });

    this._puppeteerBrowser = await puppeteer.connect({
      browserURL: this.wsUrl ? undefined : this.url,            // Use browserURL if wsUrl is not available, for local Chrome
      browserWSEndpoint: this.wsUrl ? this.wsUrl : undefined,   // Use browserWSEndpoint if wsUrl is available, for remote Chrome
      ...connectOption,
    });

    let [page] = await this._puppeteerBrowser.pages();

    let pageControllerConfig = {
      browser: this._puppeteerBrowser,
      page,
      proxy,
      turnstile
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

  abstract launch(options: any): Promise<void>;
  abstract close(): Promise<void>;
}
