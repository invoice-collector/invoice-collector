
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JungDmsAndCieCollector extends SketchCollector {

    static CONFIG = {
        id: "jung_dms_and_cie",
        name: "Jung, DMS&CIE",
        description: "i18n.collectors.jung_dms_and_cie.description",
        version: "0",
        website: "https://icrm.jungdms.de/commission/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180762.jpg",
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
        loginUrl: "https://icrm.jungdms.de/commission/list",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JungDmsAndCieCollector.CONFIG);
    }
}
