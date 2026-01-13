
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HydroQuebecCollector extends SketchCollector {

    static CONFIG = {
        id: "hydro_quebec",
        name: "Hydro-Quebec",
        description: "i18n.collectors.hydro_quebec.description",
        version: "0",
        website: "https://www.hydroquebec.com/portail/en/group/clientele/gerer-mon-compte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8814.jpg",
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
        loginUrl: "https://www.hydroquebec.com/portail/en/group/clientele/gerer-mon-compte",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HydroQuebecCollector.CONFIG);
    }
}
