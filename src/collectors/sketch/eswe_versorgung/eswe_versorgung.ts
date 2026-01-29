
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EsweVersorgungCollector extends SketchCollector {

    static CONFIG = {
        id: "eswe_versorgung",
        name: "ESWE Versorgung",
        description: "i18n.collectors.eswe_versorgung.description",
        version: "0",
        website: "https://kundenportal.eswe.com/eswe/index.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28705.jpg",
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
        loginUrl: "https://kundenportal.eswe.com/eswe/index.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EsweVersorgungCollector.CONFIG);
    }
}
