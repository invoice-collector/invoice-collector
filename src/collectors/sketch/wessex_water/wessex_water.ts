
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WessexWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "wessex_water",
        name: "Wessex Water",
        description: "i18n.collectors.wessex_water.description",
        version: "0",
        website: "https://myaccount.wessexwater.co.uk/profile/summary/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2001645.jpg",
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
        loginUrl: "https://myaccount.wessexwater.co.uk/profile/summary/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WessexWaterCollector.CONFIG);
    }
}
