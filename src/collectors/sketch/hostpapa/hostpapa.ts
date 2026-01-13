
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HostpapaCollector extends SketchCollector {

    static CONFIG = {
        id: "hostpapa",
        name: "HostPapa",
        description: "i18n.collectors.hostpapa.description",
        version: "0",
        website: "http://www.hostpapa.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8958.jpg",
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
        loginUrl: "http://www.hostpapa.ca",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostpapaCollector.CONFIG);
    }
}
