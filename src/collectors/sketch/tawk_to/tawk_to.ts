
import { SketchCollector } from '../../sketchCollector';

export class TawkToCollector extends SketchCollector {

    static CONFIG = {
        id: "tawk_to",
        name: "Tawk.to",
        description: "i18n.collectors.tawk_to.description",
        version: "0",
        website: "https://dashboard.tawk.to/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4672933.jpg",
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
        entryUrl: "https://dashboard.tawk.to/login",
    }

    constructor() {
        super(TawkToCollector.CONFIG);
    }
}
