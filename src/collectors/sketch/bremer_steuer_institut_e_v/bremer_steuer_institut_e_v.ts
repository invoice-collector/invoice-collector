
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BremerSteuerInstitutEVCollector extends SketchCollector {

    static CONFIG = {
        id: "bremer_steuer_institut_e_v",
        name: "Bremer Steuer-Institut e.V",
        description: "i18n.collectors.bremer_steuer_institut_e_v.description",
        version: "0",
        website: "https://stbv-fortbildung.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/144288.jpg",
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
        loginUrl: "https://stbv-fortbildung.de/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BremerSteuerInstitutEVCollector.CONFIG);
    }
}
