
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SkySalesPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "sky_sales_portal",
        name: "Sky Sales Portal",
        description: "i18n.collectors.sky_sales_portal.description",
        version: "0",
        website: "https://smp.nureg.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/790715.jpg",
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
        loginUrl: "https://smp.nureg.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SkySalesPortalCollector.CONFIG);
    }
}
