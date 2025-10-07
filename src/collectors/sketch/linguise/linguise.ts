
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LinguiseCollector extends SketchCollector {

    static CONFIG = {
        id: "linguise",
        name: "Linguise",
        description: "i18n.collectors.linguise.description",
        version: "0",
        website: "https://dashboard.linguise.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445715.jpg",
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
        entryUrl: "https://dashboard.linguise.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinguiseCollector.CONFIG);
    }
}
