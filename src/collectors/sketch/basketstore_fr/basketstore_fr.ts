
import { SketchCollector } from '../../sketchCollector';

export class BasketstoreFrCollector extends SketchCollector {

    static CONFIG = {
        id: "basketstore_fr",
        name: "BasketStore.fr",
        description: "i18n.collectors.basketstore_fr.description",
        version: "0",
        website: "https://www.basketstore.fr/fr/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115993.jpg",
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
        entryUrl: "https://www.basketstore.fr/fr/customer/account/login/",
    }

    constructor() {
        super(BasketstoreFrCollector.CONFIG);
    }
}
