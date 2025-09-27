
import { SketchCollector } from '../../sketchCollector';

export class DomaisyCollector extends SketchCollector {

    static CONFIG = {
        id: "domaisy",
        name: "DOMAISY",
        description: "i18n.collectors.domaisy.description",
        version: "0",
        website: "https://www.domaisy.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62996.jpg",
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
        entryUrl: "https://www.domaisy.de",
    }

    constructor() {
        super(DomaisyCollector.CONFIG);
    }
}
