
import { SketchCollector } from '../../sketchCollector';

export class BauhausDkCollector extends SketchCollector {

    static CONFIG = {
        id: "bauhaus_dk",
        name: "Bauhaus DK",
        description: "i18n.collectors.bauhaus_dk.description",
        version: "0",
        website: "https://www.bauhaus.dk/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21963.jpg",
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
        entryUrl: "https://www.bauhaus.dk/customer/account/login",
    }

    constructor() {
        super(BauhausDkCollector.CONFIG);
    }
}
