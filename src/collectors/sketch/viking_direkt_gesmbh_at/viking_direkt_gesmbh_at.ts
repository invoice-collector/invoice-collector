
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VikingDirektGesmbhAtCollector extends SketchCollector {

    static CONFIG = {
        id: "viking_direkt_gesmbh_at",
        name: "Viking Direkt GesmbH (AT)",
        description: "i18n.collectors.viking_direkt_gesmbh_at.description",
        version: "0",
        website: "https://www.vikingdirekt.at/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/418613.jpg",
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
        loginUrl: "https://www.vikingdirekt.at/de/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VikingDirektGesmbhAtCollector.CONFIG);
    }
}
