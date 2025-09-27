
import { SketchCollector } from '../../sketchCollector';

export class AntratekCollector extends SketchCollector {

    static CONFIG = {
        id: "antratek",
        name: "Antratek",
        description: "i18n.collectors.antratek.description",
        version: "0",
        website: "https://www.antratek.de/sales/order/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/848870.jpg",
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
        entryUrl: "https://www.antratek.de/sales/order/history/",
    }

    constructor() {
        super(AntratekCollector.CONFIG);
    }
}
