
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UisceEireannIrishWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "uisce_eireann_irish_water",
        name: "Uisce Eireann (Irish Water)",
        description: "i18n.collectors.uisce_eireann_irish_water.description",
        version: "0",
        website: "https://www.water.ie/webcenter/portal/secure/pages_waterusage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4546058.jpg",
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
        loginUrl: "https://www.water.ie/webcenter/portal/secure/pages_waterusage",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UisceEireannIrishWaterCollector.CONFIG);
    }
}
