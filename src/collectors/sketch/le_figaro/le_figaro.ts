
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LeFigaroCollector extends SketchCollector {

    static CONFIG = {
        id: "le_figaro",
        name: "LE FIGARO",
        description: "i18n.collectors.le_figaro.description",
        version: "0",
        website: "https://connect.lefigaro.fr/login?client=horizon_web&redirect_uri=https://www.lefigaro.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/819979.jpg",
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
        loginUrl: "https://connect.lefigaro.fr/login?client=horizon_web&redirect_uri=https://www.lefigaro.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeFigaroCollector.CONFIG);
    }
}
