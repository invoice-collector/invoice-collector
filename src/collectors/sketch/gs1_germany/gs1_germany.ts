
import { SketchCollector } from '../../sketchCollector';

export class Gs1GermanyCollector extends SketchCollector {

    static CONFIG = {
        id: "gs1_germany",
        name: "GS1 Germany",
        description: "i18n.collectors.gs1_germany.description",
        version: "0",
        website: "https://www.gs1-germany.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18197.jpg",
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
        entryUrl: "https://www.gs1-germany.de/",
    }

    constructor() {
        super(Gs1GermanyCollector.CONFIG);
    }
}
