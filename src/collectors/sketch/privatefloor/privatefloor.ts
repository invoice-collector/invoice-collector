
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrivatefloorCollector extends SketchCollector {

    static CONFIG = {
        id: "privatefloor",
        name: "PRIVATEfloor",
        description: "i18n.collectors.privatefloor.description",
        version: "0",
        website: "https://es.privatefloor.com/cuenta/pedidos/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116248.jpg",
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
        loginUrl: "https://es.privatefloor.com/cuenta/pedidos/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrivatefloorCollector.CONFIG);
    }
}
