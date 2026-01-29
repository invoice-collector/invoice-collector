
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeErfurtKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_erfurt_kundenportal",
        name: "Stadtwerke Erfurt Kundenportal",
        description: "i18n.collectors.stadtwerke_erfurt_kundenportal.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-erfurt.de/powercommerce/swe/fo/portal/invoiceDetails",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2123111.jpg",
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
        loginUrl: "https://kundenportal.stadtwerke-erfurt.de/powercommerce/swe/fo/portal/invoiceDetails",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeErfurtKundenportalCollector.CONFIG);
    }
}
