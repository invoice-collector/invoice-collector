
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChargifyCollector extends SketchCollector {

    static CONFIG = {
        id: "chargify",
        name: "Chargify",
        description: "i18n.collectors.chargify.description",
        version: "0",
        website: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8717.jpg",
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
        loginUrl: "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ChargifyCollector.CONFIG);
    }
}
