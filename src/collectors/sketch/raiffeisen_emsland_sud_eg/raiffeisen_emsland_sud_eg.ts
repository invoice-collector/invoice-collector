
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RaiffeisenEmslandSudEgCollector extends SketchCollector {

    static CONFIG = {
        id: "raiffeisen_emsland_sud_eg",
        name: "Raiffeisen Emsland-Sud eG",
        description: "i18n.collectors.raiffeisen_emsland_sud_eg.description",
        version: "0",
        website: "https://belege24.raiffeisen-emsland-sued.de/belegarchiv/1010/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4195961.jpg",
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
        loginUrl: "https://belege24.raiffeisen-emsland-sued.de/belegarchiv/1010/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RaiffeisenEmslandSudEgCollector.CONFIG);
    }
}
