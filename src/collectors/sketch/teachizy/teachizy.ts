
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TeachizyCollector extends SketchCollector {

    static CONFIG = {
        id: "teachizy",
        name: "TEACHIZY",
        description: "i18n.collectors.teachizy.description",
        version: "0",
        website: "https://app.teachizy.fr/parametres/facturation",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120087.jpg",
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
        loginUrl: "https://app.teachizy.fr/parametres/facturation",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeachizyCollector.CONFIG);
    }
}
