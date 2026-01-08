
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LandalGreenparksEigentumerCollector extends SketchCollector {

    static CONFIG = {
        id: "landal_greenparks_eigentumer",
        name: "Landal Greenparks Eigentumer",
        description: "i18n.collectors.landal_greenparks_eigentumer.description",
        version: "0",
        website: "https://www.landaleigentuemer.de/template3.aspx?cp=huurafrekening&menu=eigenarenpers&mid=eigenarenpersfinancieelhuurafrekening",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2166366.jpg",
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
        loginUrl: "https://www.landaleigentuemer.de/template3.aspx?cp=huurafrekening&menu=eigenarenpers&mid=eigenarenpersfinancieelhuurafrekening",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LandalGreenparksEigentumerCollector.CONFIG);
    }
}
