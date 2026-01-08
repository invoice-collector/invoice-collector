
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GothaerKrankenversicherungsAgCollector extends SketchCollector {

    static CONFIG = {
        id: "gothaer_krankenversicherungs_ag",
        name: "Gothaer Krankenversicherungs AG",
        description: "i18n.collectors.gothaer_krankenversicherungs_ag.description",
        version: "0",
        website: "https://www.gothaer.de/app/webmailer/webmail",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1242606.jpg",
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
        loginUrl: "https://www.gothaer.de/app/webmailer/webmail",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GothaerKrankenversicherungsAgCollector.CONFIG);
    }
}
