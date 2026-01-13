
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BilletreducComCollector extends SketchCollector {

    static CONFIG = {
        id: "billetreduc_com",
        name: "BilletReduc.com",
        description: "i18n.collectors.billetreduc_com.description",
        version: "0",
        website: "https://www.billetreduc.com/monbrconnec.htm?go=monbrresa.htm%3ftype%3dmesresas",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115939.jpg",
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
        loginUrl: "https://www.billetreduc.com/monbrconnec.htm?go=monbrresa.htm%3ftype%3dmesresas",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BilletreducComCollector.CONFIG);
    }
}
