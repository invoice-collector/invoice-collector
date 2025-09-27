
import { SketchCollector } from '../../sketchCollector';

export class TestiCollector extends SketchCollector {

    static CONFIG = {
        id: "testi",
        name: "testi",
        description: "i18n.collectors.testi.description",
        version: "0",
        website: "https://testi.at/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1985677.jpg",
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
        entryUrl: "https://testi.at/invoice",
    }

    constructor() {
        super(TestiCollector.CONFIG);
    }
}
