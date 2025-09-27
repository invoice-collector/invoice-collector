
import { SketchCollector } from '../../sketchCollector';

export class EweGoCollector extends SketchCollector {

    static CONFIG = {
        id: "ewe_go",
        name: "EWE Go",
        description: "i18n.collectors.ewe_go.description",
        version: "0",
        website: "https://service.ewe-go.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/925207.jpg",
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
        entryUrl: "https://service.ewe-go.de/",
    }

    constructor() {
        super(EweGoCollector.CONFIG);
    }
}
