
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WillemseFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "willemse_france",
        name: "Willemse France",
        description: "i18n.collectors.willemse_france.description",
        version: "0",
        website: "https://www.willemsefrance.fr/PBUserLogin.asp?CCode=33",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124019.jpg",
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
        loginUrl: "https://www.willemsefrance.fr/PBUserLogin.asp?CCode=33",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WillemseFranceCollector.CONFIG);
    }
}
