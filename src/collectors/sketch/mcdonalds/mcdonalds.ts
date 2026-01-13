
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class McdonaldsCollector extends SketchCollector {

    static CONFIG = {
        id: "mcdonalds",
        name: "McDonald's",
        description: "i18n.collectors.mcdonalds.description",
        version: "0",
        website: "https://www.mcdonalds.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/e/ea/Mcdonalds_France_2009_logo.svg",
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
        loginUrl: "https://www.mcdonalds.fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(McdonaldsCollector.CONFIG);
    }
}
