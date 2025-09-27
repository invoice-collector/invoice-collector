
import { SketchCollector } from '../../sketchCollector';

export class WolseleyCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "wolseley_canada",
        name: "Wolseley Canada",
        description: "i18n.collectors.wolseley_canada.description",
        version: "0",
        website: "https://www.wolseleyexpress.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740306.jpg",
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
        entryUrl: "https://www.wolseleyexpress.com/",
    }

    constructor() {
        super(WolseleyCanadaCollector.CONFIG);
    }
}
