
import { SketchCollector } from '../../sketchCollector';

export class VecteezyCollector extends SketchCollector {

    static CONFIG = {
        id: "vecteezy",
        name: "Vecteezy",
        description: "i18n.collectors.vecteezy.description",
        version: "0",
        website: "https://www.vecteezy.com/account/payments_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75786.jpg",
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
        entryUrl: "https://www.vecteezy.com/account/payments_history",
    }

    constructor() {
        super(VecteezyCollector.CONFIG);
    }
}
