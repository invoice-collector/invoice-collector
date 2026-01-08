
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OlinnDistributionCollector extends SketchCollector {

    static CONFIG = {
        id: "olinn_distribution",
        name: "OLINN Distribution",
        description: "i18n.collectors.olinn_distribution.description",
        version: "0",
        website: "https://olinn-distribution.com/mon-compte/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526271.jpg",
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
        loginUrl: "https://olinn-distribution.com/mon-compte/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OlinnDistributionCollector.CONFIG);
    }
}
