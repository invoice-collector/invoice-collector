
import { SketchCollector } from '../../sketchCollector';

export class PoliigonCollector extends SketchCollector {

    static CONFIG = {
        id: "poliigon",
        name: "poliigon",
        description: "i18n.collectors.poliigon.description",
        version: "0",
        website: "https://www.poliigon.com/account/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/233038.jpg",
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
        entryUrl: "https://www.poliigon.com/account/invoice",
    }

    constructor() {
        super(PoliigonCollector.CONFIG);
    }
}
