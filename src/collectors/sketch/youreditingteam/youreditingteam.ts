
import { SketchCollector } from '../../sketchCollector';

export class YoureditingteamCollector extends SketchCollector {

    static CONFIG = {
        id: "youreditingteam",
        name: "Youreditingteam",
        description: "i18n.collectors.youreditingteam.description",
        version: "0",
        website: "https://order.youreditingteam.de/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1439563.jpg",
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
        entryUrl: "https://order.youreditingteam.de/orders/",
    }

    constructor() {
        super(YoureditingteamCollector.CONFIG);
    }
}
