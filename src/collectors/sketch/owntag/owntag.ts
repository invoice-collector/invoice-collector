
import { SketchCollector } from '../../sketchCollector';

export class OwntagCollector extends SketchCollector {

    static CONFIG = {
        id: "owntag",
        name: "Owntag",
        description: "i18n.collectors.owntag.description",
        version: "0",
        website: "https://console.owntag.eu/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375893.jpg",
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
        entryUrl: "https://console.owntag.eu/billing",
    }

    constructor() {
        super(OwntagCollector.CONFIG);
    }
}
