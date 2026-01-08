import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChristianFischbacherCollector extends SketchCollector {

    static CONFIG = {
        id: "christian_fischbacher",
        name: "Christian Fischbacher",
        description: "i18n.collectors.christian_fischbacher.description",
        version: "0",
        website: "https://fischbacher1819.com",
        logo: "https://wunschgardine.de/symbole/fischbacher1819.svg",
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
        loginUrl: "https://fischbacher1819.com/fr/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChristianFischbacherCollector.CONFIG);
    }
}
