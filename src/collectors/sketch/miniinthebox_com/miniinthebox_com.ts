
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiniintheboxComCollector extends SketchCollector {

    static CONFIG = {
        id: "miniinthebox_com",
        name: "MiniInTheBox.com",
        description: "i18n.collectors.miniinthebox_com.description",
        version: "0",
        website: "https://www.miniinthebox.com/index.php?main_page=login&src=mainLoginLink&prm=2.1.74.0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122412.jpg",
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
        loginUrl: "https://www.miniinthebox.com/index.php?main_page=login&src=mainLoginLink&prm=2.1.74.0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MiniintheboxComCollector.CONFIG);
    }
}
