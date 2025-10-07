
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SofatutorCollector extends SketchCollector {

    static CONFIG = {
        id: "sofatutor",
        name: "Sofatutor",
        description: "i18n.collectors.sofatutor.description",
        version: "0",
        website: "https://www.sofatutor.com/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45562.jpg",
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
        entryUrl: "https://www.sofatutor.com/account/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SofatutorCollector.CONFIG);
    }
}
