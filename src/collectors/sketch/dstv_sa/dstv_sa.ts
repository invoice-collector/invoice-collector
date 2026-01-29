
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DstvSaCollector extends SketchCollector {

    static CONFIG = {
        id: "dstv_sa",
        name: "DSTV SA",
        description: "i18n.collectors.dstv_sa.description",
        version: "0",
        website: "https://www.dstv.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/424267.jpg",
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
        loginUrl: "https://www.dstv.co.za/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DstvSaCollector.CONFIG);
    }
}
