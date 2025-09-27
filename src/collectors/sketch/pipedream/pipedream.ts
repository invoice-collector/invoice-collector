
import { SketchCollector } from '../../sketchCollector';

export class PipedreamCollector extends SketchCollector {

    static CONFIG = {
        id: "pipedream",
        name: "Pipedream",
        description: "i18n.collectors.pipedream.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xREFMaUpCU1pzb2x0R2ZDLF9NUWxFRWl6ZUVCMHpiY0pqSFJ1Q0R6Q2dYaXJBMWts0100JFXBsEdX",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374713.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xREFMaUpCU1pzb2x0R2ZDLF9NUWxFRWl6ZUVCMHpiY0pqSFJ1Q0R6Q2dYaXJBMWts0100JFXBsEdX",
    }

    constructor() {
        super(PipedreamCollector.CONFIG);
    }
}
