
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OptimiseCollector extends SketchCollector {

    static CONFIG = {
        id: "optimise",
        name: "Optimise",
        description: "i18n.collectors.optimise.description",
        version: "0",
        website: "https://dashboard.optimisemedia.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2797158.jpg",
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
        entryUrl: "https://dashboard.optimisemedia.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OptimiseCollector.CONFIG);
    }
}
