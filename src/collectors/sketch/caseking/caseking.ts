
import { SketchCollector } from '../../sketchCollector';

export class CasekingCollector extends SketchCollector {

    static CONFIG = {
        id: "caseking",
        name: "CaseKing",
        description: "i18n.collectors.caseking.description",
        version: "0",
        website: "https://www.caseking.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503816.jpg",
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
        entryUrl: "https://www.caseking.de/login",
    }

    constructor() {
        super(CasekingCollector.CONFIG);
    }
}
