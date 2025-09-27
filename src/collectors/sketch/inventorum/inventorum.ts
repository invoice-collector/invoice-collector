
import { SketchCollector } from '../../sketchCollector';

export class InventorumCollector extends SketchCollector {

    static CONFIG = {
        id: "inventorum",
        name: "Inventorum",
        description: "i18n.collectors.inventorum.description",
        version: "0",
        website: "https://backoffice.inventorum.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50373.jpg",
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
        entryUrl: "https://backoffice.inventorum.com/#/login",
    }

    constructor() {
        super(InventorumCollector.CONFIG);
    }
}
