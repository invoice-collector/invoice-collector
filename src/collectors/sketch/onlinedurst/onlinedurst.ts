
import { SketchCollector } from '../../sketchCollector';

export class OnlinedurstCollector extends SketchCollector {

    static CONFIG = {
        id: "onlinedurst",
        name: "Onlinedurst",
        description: "i18n.collectors.onlinedurst.description",
        version: "0",
        website: "https://onlinedurst.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131273.jpg",
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
        entryUrl: "https://onlinedurst.de/account/orders",
    }

    constructor() {
        super(OnlinedurstCollector.CONFIG);
    }
}
