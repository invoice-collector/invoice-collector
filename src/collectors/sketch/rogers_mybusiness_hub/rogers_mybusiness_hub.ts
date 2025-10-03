
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RogersMybusinessHubCollector extends SketchCollector {

    static CONFIG = {
        id: "rogers_mybusiness_hub",
        name: "Rogers - MyBusiness Hub",
        description: "i18n.collectors.rogers_mybusiness_hub.description",
        version: "0",
        website: "https://mybusinesshub.rogers.com/ocpLogin/one_sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/104001.jpg",
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
        entryUrl: "https://mybusinesshub.rogers.com/ocpLogin/one_sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RogersMybusinessHubCollector.CONFIG);
    }
}
