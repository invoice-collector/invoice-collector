
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OvzCollector extends SketchCollector {

    static CONFIG = {
        id: "ovz",
        name: "OVZ",
        description: "i18n.collectors.ovz.description",
        version: "0",
        website: "https://www.ovz.de/login/kunde/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1781495.jpg",
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
        loginUrl: "https://www.ovz.de/login/kunde/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OvzCollector.CONFIG);
    }
}
