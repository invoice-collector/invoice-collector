
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class USCellularCollector extends SketchCollector {

    static CONFIG = {
        id: "u_s_cellular",
        name: "U.S. Cellular",
        description: "i18n.collectors.u_s_cellular.description",
        version: "0",
        website: "https://m.uscellular.com/uscellular/app/login/authenticate/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8731.jpg",
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
        loginUrl: "https://m.uscellular.com/uscellular/app/login/authenticate/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(USCellularCollector.CONFIG);
    }
}
