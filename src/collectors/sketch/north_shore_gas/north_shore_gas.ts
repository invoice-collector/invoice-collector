
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NorthShoreGasCollector extends SketchCollector {

    static CONFIG = {
        id: "north_shore_gas",
        name: "North Shore Gas",
        description: "i18n.collectors.north_shore_gas.description",
        version: "0",
        website: "https://www.northshoregasdelivery.com/accountsummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4677235.jpg",
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
        loginUrl: "https://www.northshoregasdelivery.com/accountsummary",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NorthShoreGasCollector.CONFIG);
    }
}
