
import { SketchCollector } from '../../sketchCollector';

export class SupercheckBonitatCollector extends SketchCollector {

    static CONFIG = {
        id: "supercheck_bonitat",
        name: "Supercheck-Bonitat",
        description: "i18n.collectors.supercheck_bonitat.description",
        version: "0",
        website: "https://www.supercheck-bonitaet.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/390101.jpg",
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
        entryUrl: "https://www.supercheck-bonitaet.de/",
    }

    constructor() {
        super(SupercheckBonitatCollector.CONFIG);
    }
}
