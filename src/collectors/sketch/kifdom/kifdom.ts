
import { SketchCollector } from '../../sketchCollector';

export class KifdomCollector extends SketchCollector {

    static CONFIG = {
        id: "kifdom",
        name: "Kifdom",
        description: "i18n.collectors.kifdom.description",
        version: "0",
        website: "https://www.kifdom.com/facturation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1966435.jpg",
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
        entryUrl: "https://www.kifdom.com/facturation",
    }

    constructor() {
        super(KifdomCollector.CONFIG);
    }
}
