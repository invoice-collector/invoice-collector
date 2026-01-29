
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CleverElementsCollector extends SketchCollector {

    static CONFIG = {
        id: "clever_elements",
        name: "Clever Elements",
        description: "i18n.collectors.clever_elements.description",
        version: "0",
        website: "https://www.sendcockpit.com/appl/ce/software/code/DoorLogin.php?&b=cleverelements&bid=?&bid=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29317.jpg",
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
        loginUrl: "https://www.sendcockpit.com/appl/ce/software/code/DoorLogin.php?&b=cleverelements&bid=?&bid=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CleverElementsCollector.CONFIG);
    }
}
