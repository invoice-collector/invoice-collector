
import { SketchCollector } from '../../sketchCollector';

export class LanoCollector extends SketchCollector {

    static CONFIG = {
        id: "lano",
        name: "Lano",
        description: "i18n.collectors.lano.description",
        version: "0",
        website: "https://fms.lano.io/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/390071.jpg",
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
        entryUrl: "https://fms.lano.io/de/login",
    }

    constructor() {
        super(LanoCollector.CONFIG);
    }
}
