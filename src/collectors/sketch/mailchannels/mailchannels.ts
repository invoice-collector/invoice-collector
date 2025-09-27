
import { SketchCollector } from '../../sketchCollector';

export class MailchannelsCollector extends SketchCollector {

    static CONFIG = {
        id: "mailchannels",
        name: "MailChannels",
        description: "i18n.collectors.mailchannels.description",
        version: "0",
        website: "https://console.mailchannels.net/login/auth?__hstc=212618955.746897d290648316fd5f88cf5841423e.1524056541762.1524056541762.1524056541762.1&__hssc=212618955.2.1524056541762&__hsfp=3161351056&_ga=2.202272338.290029621.1524056540-9971050.1524056540",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31174.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://console.mailchannels.net/login/auth?__hstc=212618955.746897d290648316fd5f88cf5841423e.1524056541762.1524056541762.1524056541762.1&__hssc=212618955.2.1524056541762&__hsfp=3161351056&_ga=2.202272338.290029621.1524056540-9971050.1524056540",
    }

    constructor() {
        super(MailchannelsCollector.CONFIG);
    }
}
