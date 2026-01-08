
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpectrumEnterpriseCollector extends SketchCollector {

    static CONFIG = {
        id: "spectrum_enterprise",
        name: "Spectrum Enterprise",
        description: "i18n.collectors.spectrum_enterprise.description",
        version: "0",
        website: "https://spectrumenterprise.net/login?signed-out=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385159.jpg",
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
        loginUrl: "https://spectrumenterprise.net/login?signed-out=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpectrumEnterpriseCollector.CONFIG);
    }
}
