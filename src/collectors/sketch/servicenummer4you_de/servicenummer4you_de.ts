
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class Servicenummer4youDeCollector extends SketchCollector {

    static CONFIG = {
        id: "servicenummer4you_de",
        name: "Servicenummer4you.de",
        description: "i18n.collectors.servicenummer4you_de.description",
        version: "0",
        website: "http://login.srn-manager.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82023.jpg",
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
        loginUrl: "http://login.srn-manager.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Servicenummer4youDeCollector.CONFIG);
    }
}
