
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoppenrathB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "coppenrath_b2b",
        name: "Coppenrath B2B",
        description: "i18n.collectors.coppenrath_b2b.description",
        version: "0",
        website: "https://b2b.coppenrath.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732081.jpg",
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
        entryUrl: "https://b2b.coppenrath.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoppenrathB2bCollector.CONFIG);
    }
}
