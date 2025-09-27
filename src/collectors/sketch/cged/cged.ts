
import { SketchCollector } from '../../sketchCollector';

export class CgedCollector extends SketchCollector {

    static CONFIG = {
        id: "cged",
        name: "CGED",
        description: "i18n.collectors.cged.description",
        version: "0",
        website: "https://www.cged.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/937743.jpg",
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
        entryUrl: "https://www.cged.fr/",
    }

    constructor() {
        super(CgedCollector.CONFIG);
    }
}
