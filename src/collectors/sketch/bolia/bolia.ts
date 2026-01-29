import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BoliaCollector extends SketchCollector {

    static CONFIG = {
        id: "bolia",
        name: "Bolia",
        description: "i18n.collectors.bolia.description",
        version: "0",
        website: "https://www.bolia.com",
        logo: "https://iconlogovector.com/uploads/images/2025/05/lg-68310146ab917-Bolia.webp",
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
        loginUrl: "https://www.bolia.com/fr-fr/mybolia/se-connecter/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BoliaCollector.CONFIG);
    }
}
