
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwuEmobilityCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "swu_emobility_cloud",
        name: "SWU - emobility cloud",
        description: "i18n.collectors.swu_emobility_cloud.description",
        version: "0",
        website: "https://swu.emobilitycloud.com/mein-konto/rechnung/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144297.jpg",
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
        loginUrl: "https://swu.emobilitycloud.com/mein-konto/rechnung/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SwuEmobilityCloudCollector.CONFIG);
    }
}
