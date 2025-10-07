
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CspCollector extends SketchCollector {

    static CONFIG = {
        id: "csp",
        name: "CSP",
        description: "i18n.collectors.csp.description",
        version: "0",
        website: "https://www.csp-epl.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496970.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.csp-epl.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CspCollector.CONFIG);
    }
}
