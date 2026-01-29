
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KeySystemsRrpproxyCollector extends SketchCollector {

    static CONFIG = {
        id: "key_systems_rrpproxy",
        name: "Key-Systems - RRPproxy",
        description: "i18n.collectors.key_systems_rrpproxy.description",
        version: "0",
        website: "https://wi.rrpproxy.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31075.jpg",
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
        loginUrl: "https://wi.rrpproxy.net",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KeySystemsRrpproxyCollector.CONFIG);
    }
}
