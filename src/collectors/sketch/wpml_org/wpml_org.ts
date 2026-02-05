
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WpmlOrgCollector extends SketchCollector {

    static CONFIG = {
        id: "wpml_org",
        name: "WPML.org",
        description: "i18n.collectors.wpml_org.description",
        version: "0",
        website: "https://wpml.org/view_order/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28612.jpg",
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
        loginUrl: "https://wpml.org/view_order/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WpmlOrgCollector.CONFIG);
    }
}
