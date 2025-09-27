
import { SketchCollector } from '../../sketchCollector';

export class LandenCollector extends SketchCollector {

    static CONFIG = {
        id: "landen",
        name: "Landen",
        description: "i18n.collectors.landen.description",
        version: "0",
        website: "https://app.landen.co/settings/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409627.jpg",
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
        entryUrl: "https://app.landen.co/settings/subscription",
    }

    constructor() {
        super(LandenCollector.CONFIG);
    }
}
