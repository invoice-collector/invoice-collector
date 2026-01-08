
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AirwireCollector extends SketchCollector {

    static CONFIG = {
        id: "airwire",
        name: "airwire",
        description: "i18n.collectors.airwire.description",
        version: "0",
        website: "http://www.airwire.ie",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89497.jpg",
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
        loginUrl: "http://www.airwire.ie",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirwireCollector.CONFIG);
    }
}
