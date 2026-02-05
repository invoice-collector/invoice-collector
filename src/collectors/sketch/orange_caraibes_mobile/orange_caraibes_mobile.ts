
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrangeCaraibesMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_caraibes_mobile",
        name: "Orange Caraibes - Mobile",
        description: "i18n.collectors.orange_caraibes_mobile.description",
        version: "0",
        website: "https://login.orange.fr/?return_url=https://caraibe.orange.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135351.jpg",
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
        loginUrl: "https://login.orange.fr/?return_url=https://caraibe.orange.fr/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OrangeCaraibesMobileCollector.CONFIG);
    }
}
