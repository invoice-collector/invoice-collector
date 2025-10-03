
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArthyCollector extends SketchCollector {

    static CONFIG = {
        id: "arthy",
        name: "Arthy",
        description: "i18n.collectors.arthy.description",
        version: "0",
        website: "https://app.getarthy.com/en/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2225194.jpg",
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
        entryUrl: "https://app.getarthy.com/en/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArthyCollector.CONFIG);
    }
}
