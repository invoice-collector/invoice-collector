
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MarmosetCollector extends SketchCollector {

    static CONFIG = {
        id: "marmoset",
        name: "Marmoset",
        description: "i18n.collectors.marmoset.description",
        version: "0",
        website: "https://account.marmoset.co/orders?63lvh5yg66sgu6jswt4224rrva=qkz5clxxhgeegpkwqbdthbuokq",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097932.jpg",
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
        loginUrl: "https://account.marmoset.co/orders?63lvh5yg66sgu6jswt4224rrva=qkz5clxxhgeegpkwqbdthbuokq",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarmosetCollector.CONFIG);
    }
}
