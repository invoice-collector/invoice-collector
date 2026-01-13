
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ManitobaHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "manitoba_hydro",
        name: "Manitoba Hydro",
        description: "i18n.collectors.manitoba_hydro.description",
        version: "0",
        website: "https://www.hydro.mb.ca/mybillapp/loginf5?action=acctsummary&lang=en_CA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9355.jpg",
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
        loginUrl: "https://www.hydro.mb.ca/mybillapp/loginf5?action=acctsummary&lang=en_CA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ManitobaHydroCollector.CONFIG);
    }
}
