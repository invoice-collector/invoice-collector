
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class _4tcCollector extends SketchCollector {

    static CONFIG = {
        id: "4tc",
        name: "4tc",
        description: "i18n.collectors.4tc.description",
        version: "0",
        website: "https://4tc.be/bestellingen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1801012.jpg",
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
        loginUrl: "https://4tc.be/bestellingen",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(_4tcCollector.CONFIG);
    }
}
