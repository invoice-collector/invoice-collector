
import { SketchCollector } from '../../sketchCollector';

export class TemplatemonsterCollector extends SketchCollector {

    static CONFIG = {
        id: "templatemonster",
        name: "Templatemonster",
        description: "i18n.collectors.templatemonster.description",
        version: "0",
        website: "https://www.templatemonster.com/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/739628.jpg",
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
        entryUrl: "https://www.templatemonster.com/de/",
    }

    constructor() {
        super(TemplatemonsterCollector.CONFIG);
    }
}
