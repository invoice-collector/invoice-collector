
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HexonetCollector extends SketchCollector {

    static CONFIG = {
        id: "hexonet",
        name: "Hexonet",
        description: "i18n.collectors.hexonet.description",
        version: "0",
        website: "https://www.hexonet.net/sign-up",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39121.jpg",
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
        loginUrl: "https://www.hexonet.net/sign-up",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HexonetCollector.CONFIG);
    }
}
