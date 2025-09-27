
import { SketchCollector } from '../../sketchCollector';

export class NleCollector extends SketchCollector {

    static CONFIG = {
        id: "nle",
        name: "NLE",
        description: "i18n.collectors.nle.description",
        version: "0",
        website: "https://mijn.nle.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9552.jpg",
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
        entryUrl: "https://mijn.nle.nl/",
    }

    constructor() {
        super(NleCollector.CONFIG);
    }
}
