
import { SketchCollector } from '../../sketchCollector';

export class RakutenFrCollector extends SketchCollector {

    static CONFIG = {
        id: "rakuten_fr",
        name: "Rakuten FR",
        description: "i18n.collectors.rakuten_fr.description",
        version: "0",
        website: "https://fr.shopping.rakuten.com/usersecure?action=invoicesaction",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618870.jpg",
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
        entryUrl: "https://fr.shopping.rakuten.com/usersecure?action=invoicesaction",
    }

    constructor() {
        super(RakutenFrCollector.CONFIG);
    }
}
