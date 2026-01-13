
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShipwireCollector extends SketchCollector {

    static CONFIG = {
        id: "shipwire",
        name: "Shipwire",
        description: "i18n.collectors.shipwire.description",
        version: "0",
        website: "https://www.shipwire.com/log-in/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8654.jpg",
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
        loginUrl: "https://www.shipwire.com/log-in/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShipwireCollector.CONFIG);
    }
}
