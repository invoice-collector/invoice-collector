
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MonacotelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "monacotelecom",
        name: "monacotelecom",
        description: "i18n.collectors.monacotelecom.description",
        version: "0",
        website: "https://espace-client.monaco-telecom.mc/bill/downloadPdfBil/1454817/202108",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927930.jpg",
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
        loginUrl: "https://espace-client.monaco-telecom.mc/bill/downloadPdfBil/1454817/202108",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonacotelecomCollector.CONFIG);
    }
}
