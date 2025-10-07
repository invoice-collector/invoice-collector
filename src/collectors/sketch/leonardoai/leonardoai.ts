
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeonardoaiCollector extends SketchCollector {

    static CONFIG = {
        id: "leonardoai",
        name: "LeonardoAI",
        description: "i18n.collectors.leonardoai.description",
        version: "0",
        website: "https://app.leonardo.ai/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175545.jpg",
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
        entryUrl: "https://app.leonardo.ai/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeonardoaiCollector.CONFIG);
    }
}
