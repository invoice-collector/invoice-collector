
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlowfactCollector extends SketchCollector {

    static CONFIG = {
        id: "flowfact",
        name: "FLOWFACT",
        description: "i18n.collectors.flowfact.description",
        version: "0",
        website: "https://apps.flowfact.com/login?redirect=%2Fhome%2Fapps",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53569.jpg",
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
        entryUrl: "https://apps.flowfact.com/login?redirect=%2Fhome%2Fapps",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlowfactCollector.CONFIG);
    }
}
