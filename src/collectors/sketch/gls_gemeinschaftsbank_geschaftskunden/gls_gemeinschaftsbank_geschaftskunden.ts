
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GlsGemeinschaftsbankGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "gls_gemeinschaftsbank_geschaftskunden",
        name: "GLS Gemeinschaftsbank Geschaftskunden",
        description: "i18n.collectors.gls_gemeinschaftsbank_geschaftskunden.description",
        version: "0",
        website: "https://www.gls-online-filiale.de/services_cloud/portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95743.jpg",
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
        loginUrl: "https://www.gls-online-filiale.de/services_cloud/portal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(GlsGemeinschaftsbankGeschaftskundenCollector.CONFIG);
    }
}
