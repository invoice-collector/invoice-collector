
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CommodisCollector extends SketchCollector {

    static CONFIG = {
        id: "commodis",
        name: "Commodis",
        description: "i18n.collectors.commodis.description",
        version: "0",
        website: "https://aflexio.commodis.de/de.commodis.ui.employer/secure/staff/booking-history.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415207.jpg",
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
        loginUrl: "https://aflexio.commodis.de/de.commodis.ui.employer/secure/staff/booking-history.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CommodisCollector.CONFIG);
    }
}
