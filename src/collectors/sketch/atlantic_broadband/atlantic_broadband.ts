
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AtlanticBroadbandCollector extends SketchCollector {

    static CONFIG = {
        id: "atlantic_broadband",
        name: "Atlantic Broadband",
        description: "i18n.collectors.atlantic_broadband.description",
        version: "0",
        website: "https://atlbb.convergentcare.com/atlbb/goToLogin.action?subClientId=2002#ContextMenu/documentView",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80283.jpg",
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
        loginUrl: "https://atlbb.convergentcare.com/atlbb/goToLogin.action?subClientId=2002#ContextMenu/documentView",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtlanticBroadbandCollector.CONFIG);
    }
}
