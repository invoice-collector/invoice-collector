
import { SketchCollector } from '../../sketchCollector';

export class KiehlsGermanyCollector extends SketchCollector {

    static CONFIG = {
        id: "kiehls_germany",
        name: "Kiehls Germany",
        description: "i18n.collectors.kiehls_germany.description",
        version: "0",
        website: "https://www.kiehls.de/on/demandware.store/Sites-kiehls-de-Site/de_DE/Order-Details?orderNumber=KIE7834855",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973292.jpg",
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
        entryUrl: "https://www.kiehls.de/on/demandware.store/Sites-kiehls-de-Site/de_DE/Order-Details?orderNumber=KIE7834855",
    }

    constructor() {
        super(KiehlsGermanyCollector.CONFIG);
    }
}
