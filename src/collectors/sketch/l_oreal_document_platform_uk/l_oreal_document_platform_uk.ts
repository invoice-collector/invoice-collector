
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LOrealDocumentPlatformUkCollector extends SketchCollector {

    static CONFIG = {
        id: "l_oreal_document_platform_uk",
        name: "L\'Oreal Document Platform UK",
        description: "i18n.collectors.l_oreal_document_platform_uk.description",
        version: "0",
        website: "https://documentplatform.loreal.co.uk/data/p/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284750.jpg",
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
        loginUrl: "https://documentplatform.loreal.co.uk/data/p/1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LOrealDocumentPlatformUkCollector.CONFIG);
    }
}
