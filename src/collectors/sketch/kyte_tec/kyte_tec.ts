
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KyteTecCollector extends SketchCollector {

    static CONFIG = {
        id: "kyte_tec",
        name: "Kyte-tec",
        description: "i18n.collectors.kyte_tec.description",
        version: "0",
        website: "https://console.kyte-tec.com/shopadmin/document/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220478.jpg",
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
        loginUrl: "https://console.kyte-tec.com/shopadmin/document/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KyteTecCollector.CONFIG);
    }
}
