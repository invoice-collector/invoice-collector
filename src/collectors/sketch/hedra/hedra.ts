
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HedraCollector extends SketchCollector {

    static CONFIG = {
        id: "hedra",
        name: "Hedra",
        description: "i18n.collectors.hedra.description",
        version: "0",
        website: "https://www.hedra.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571740.jpg",
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
        entryUrl: "https://www.hedra.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HedraCollector.CONFIG);
    }
}
