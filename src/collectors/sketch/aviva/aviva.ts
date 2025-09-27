
import { SketchCollector } from '../../sketchCollector';

export class AvivaCollector extends SketchCollector {

    static CONFIG = {
        id: "aviva",
        name: "Aviva",
        description: "i18n.collectors.aviva.description",
        version: "0",
        website: "https://www.direct.aviva.co.uk/MyAccount/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54752.jpg",
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
        entryUrl: "https://www.direct.aviva.co.uk/MyAccount/login",
    }

    constructor() {
        super(AvivaCollector.CONFIG);
    }
}
