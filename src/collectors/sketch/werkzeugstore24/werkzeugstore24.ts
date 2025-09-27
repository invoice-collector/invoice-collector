
import { SketchCollector } from '../../sketchCollector';

export class Werkzeugstore24Collector extends SketchCollector {

    static CONFIG = {
        id: "werkzeugstore24",
        name: "Werkzeugstore24",
        description: "i18n.collectors.werkzeugstore24.description",
        version: "0",
        website: "https://werkzeugstore24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/176813.jpg",
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
        entryUrl: "https://werkzeugstore24.de",
    }

    constructor() {
        super(Werkzeugstore24Collector.CONFIG);
    }
}
