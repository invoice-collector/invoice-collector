
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class I4wifiCollector extends SketchCollector {

    static CONFIG = {
        id: "i4wifi",
        name: "i4wifi",
        description: "i18n.collectors.i4wifi.description",
        version: "0",
        website: "https://www.i4wifi.eu/en/faktury",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4202840.jpg",
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
        loginUrl: "https://www.i4wifi.eu/en/faktury",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(I4wifiCollector.CONFIG);
    }
}
