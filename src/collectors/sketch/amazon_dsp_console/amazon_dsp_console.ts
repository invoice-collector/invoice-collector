
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonDspConsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_dsp_console",
        name: "Amazon DSP Console",
        description: "i18n.collectors.amazon_dsp_console.description",
        version: "0",
        website: "https://advertising.amazon.com/de-de/sign-in?ref_=a20m_us_hnav_sgn&countrycode=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792401.jpg",
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
        loginUrl: "https://advertising.amazon.com/de-de/sign-in?ref_=a20m_us_hnav_sgn&countrycode=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonDspConsoleCollector.CONFIG);
    }
}
