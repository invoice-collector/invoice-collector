
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GastronautCollector extends SketchCollector {

    static CONFIG = {
        id: "gastronaut",
        name: "Gastronaut",
        description: "i18n.collectors.gastronaut.description",
        version: "0",
        website: "https://app.gastronaut.ai/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200579.jpg",
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
        entryUrl: "https://app.gastronaut.ai/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GastronautCollector.CONFIG);
    }
}
