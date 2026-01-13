
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InspirePeterCoulsonCollector extends SketchCollector {

    static CONFIG = {
        id: "inspire_peter_coulson",
        name: "inspire peter-coulson",
        description: "i18n.collectors.inspire_peter_coulson.description",
        version: "0",
        website: "https://inspire.peter-coulson.com.au/my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120338.jpg",
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
        loginUrl: "https://inspire.peter-coulson.com.au/my-account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InspirePeterCoulsonCollector.CONFIG);
    }
}
