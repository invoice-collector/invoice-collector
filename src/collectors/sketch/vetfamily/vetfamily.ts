
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VetfamilyCollector extends SketchCollector {

    static CONFIG = {
        id: "vetfamily",
        name: "Vetfamily",
        description: "i18n.collectors.vetfamily.description",
        version: "0",
        website: "https://portal.vetfamily.de/login?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196211.jpg",
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
        entryUrl: "https://portal.vetfamily.de/login?next=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VetfamilyCollector.CONFIG);
    }
}
