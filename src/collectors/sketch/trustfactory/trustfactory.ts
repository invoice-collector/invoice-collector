
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TrustfactoryCollector extends SketchCollector {

    static CONFIG = {
        id: "trustfactory",
        name: "Trustfactory",
        description: "i18n.collectors.trustfactory.description",
        version: "0",
        website: "https://trustfactory.app",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1126186.jpg",
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
        entryUrl: "https://trustfactory.app",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TrustfactoryCollector.CONFIG);
    }
}
