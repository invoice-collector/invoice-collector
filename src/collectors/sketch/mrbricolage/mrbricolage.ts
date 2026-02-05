import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MrBricolageCollector extends SketchCollector {

    static CONFIG = {
        id: "mrbricolage",
        name: "Mr.bricolage",
        description: "i18n.collectors.mrbricolage.description",
        version: "0",
        website: "https://mr-bricolage.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mr_Bricolage_logo.png",
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
        loginUrl: "https://www.mr-bricolage.fr/paris-montyon/customer/account/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MrBricolageCollector.CONFIG);
    }
}
