
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KspliceCollector extends SketchCollector {

    static CONFIG = {
        id: "ksplice",
        name: "Ksplice",
        description: "i18n.collectors.ksplice.description",
        version: "0",
        website: "https://status-ksplice.oracle.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19379.jpg",
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
        loginUrl: "https://status-ksplice.oracle.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KspliceCollector.CONFIG);
    }
}
