
import { SketchCollector } from '../../sketchCollector';

export class OrangeMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_mobile",
        name: "Orange - Mobile",
        description: "i18n.collectors.orange_mobile.description",
        version: "0",
        website: "https://espaceclientv3.orange.fr/?page=gt-home-page",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135229.jpg",
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
        entryUrl: "https://espaceclientv3.orange.fr/?page=gt-home-page",
    }

    constructor() {
        super(OrangeMobileCollector.CONFIG);
    }
}
