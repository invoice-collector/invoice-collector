
import { SketchCollector } from '../../sketchCollector';

export class ComodosslstoreCollector extends SketchCollector {

    static CONFIG = {
        id: "comodosslstore",
        name: "ComodoSSLstore",
        description: "i18n.collectors.comodosslstore.description",
        version: "0",
        website: "https://comodosslstore.com/client/orders.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53195.jpg",
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
        entryUrl: "https://comodosslstore.com/client/orders.aspx",
    }

    constructor() {
        super(ComodosslstoreCollector.CONFIG);
    }
}
