
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NahShCollector extends SketchCollector {

    static CONFIG = {
        id: "nah_sh",
        name: "Nah.sh",
        description: "i18n.collectors.nah_sh.description",
        version: "0",
        website: "https://nahsh.tickeos.de/index.php/customer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038957.jpg",
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
        loginUrl: "https://nahsh.tickeos.de/index.php/customer",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NahShCollector.CONFIG);
    }
}
