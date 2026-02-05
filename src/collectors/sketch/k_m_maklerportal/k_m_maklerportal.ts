
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KMMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "k_m_maklerportal",
        name: "K + M - Maklerportal",
        description: "i18n.collectors.k_m_maklerportal.description",
        version: "0",
        website: "https://secure.konzept-marketing.de/Maklerportal/V2/CourtageListenDownload.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693333.jpg",
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
        loginUrl: "https://secure.konzept-marketing.de/Maklerportal/V2/CourtageListenDownload.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KMMaklerportalCollector.CONFIG);
    }
}
