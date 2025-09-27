
import { SketchCollector } from '../../sketchCollector';

export class TechquartierCollector extends SketchCollector {

    static CONFIG = {
        id: "techquartier",
        name: "TechQuartier",
        description: "i18n.collectors.techquartier.description",
        version: "0",
        website: "https://techquartier.officernd.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1500926.jpg",
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
        entryUrl: "https://techquartier.officernd.com/login",
    }

    constructor() {
        super(TechquartierCollector.CONFIG);
    }
}
