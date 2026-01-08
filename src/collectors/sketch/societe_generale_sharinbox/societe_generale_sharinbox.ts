
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SocieteGeneraleSharinboxCollector extends SketchCollector {

    static CONFIG = {
        id: "societe_generale_sharinbox",
        name: "Societe Generale Sharinbox",
        description: "i18n.collectors.societe_generale_sharinbox.description",
        version: "0",
        website: "https://sharinbox.societegenerale.com/login.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115520.jpg",
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
        loginUrl: "https://sharinbox.societegenerale.com/login.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SocieteGeneraleSharinboxCollector.CONFIG);
    }
}
