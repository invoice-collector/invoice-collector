
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvabootCollector extends SketchCollector {

    static CONFIG = {
        id: "evaboot",
        name: "Evaboot",
        description: "i18n.collectors.evaboot.description",
        version: "0",
        website: "https://app.evaboot.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/823854.jpg",
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
        entryUrl: "https://app.evaboot.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvabootCollector.CONFIG);
    }
}
