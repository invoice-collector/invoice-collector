
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UmschlageDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "umschlage_deutschland",
        name: "Umschlage Deutschland",
        description: "i18n.collectors.umschlage_deutschland.description",
        version: "0",
        website: "https://www.umschlaege.com/customer?xCmd=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/937750.jpg",
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
        loginUrl: "https://www.umschlaege.com/customer?xCmd=account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UmschlageDeutschlandCollector.CONFIG);
    }
}
