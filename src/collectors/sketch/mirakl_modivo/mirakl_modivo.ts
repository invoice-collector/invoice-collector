
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiraklModivoCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_modivo",
        name: "Mirakl Modivo",
        description: "i18n.collectors.mirakl_modivo.description",
        version: "0",
        website: "https://modivo.mirakl.net/sellerpayment/shop/accounting-document/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973279.jpg",
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
        loginUrl: "https://modivo.mirakl.net/sellerpayment/shop/accounting-document/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiraklModivoCollector.CONFIG);
    }
}
