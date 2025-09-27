
import { SketchCollector } from '../../sketchCollector';

export class CricketWirelessCollector extends SketchCollector {

    static CONFIG = {
        id: "cricket_wireless",
        name: "cricket wireless",
        description: "i18n.collectors.cricket_wireless.description",
        version: "0",
        website: "https://www.cricketwireless.com/myaccount.html#/billingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8839.jpg",
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
        entryUrl: "https://www.cricketwireless.com/myaccount.html#/billingHistory",
    }

    constructor() {
        super(CricketWirelessCollector.CONFIG);
    }
}
