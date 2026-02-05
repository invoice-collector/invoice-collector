
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MomoxCollector extends SketchCollector {

    static CONFIG = {
        id: "momox",
        name: "momox",
        description: "i18n.collectors.momox.description",
        version: "0",
        website: "https://www.momox.de/konto/profil/verkaeufe/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123948.jpg",
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
        loginUrl: "https://www.momox.de/konto/profil/verkaeufe/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MomoxCollector.CONFIG);
    }
}
