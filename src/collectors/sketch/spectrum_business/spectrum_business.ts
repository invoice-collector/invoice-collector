
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpectrumBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "spectrum_business",
        name: "Spectrum Business",
        description: "i18n.collectors.spectrum_business.description",
        version: "0",
        website: "https://www.spectrumbusiness.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88391.jpg",
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
        loginUrl: "https://www.spectrumbusiness.net/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SpectrumBusinessCollector.CONFIG);
    }
}
