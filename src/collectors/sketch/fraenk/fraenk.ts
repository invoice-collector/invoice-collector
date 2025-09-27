
import { SketchCollector } from '../../sketchCollector';

export class FraenkCollector extends SketchCollector {

    static CONFIG = {
        id: "fraenk",
        name: "fraenk",
        description: "i18n.collectors.fraenk.description",
        version: "0",
        website: "https://fraenk.de/xyz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988599.jpg",
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
        entryUrl: "https://fraenk.de/xyz",
    }

    constructor() {
        super(FraenkCollector.CONFIG);
    }
}
