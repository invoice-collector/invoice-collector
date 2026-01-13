
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BtiBefestigungstechnikGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "bti_befestigungstechnik_gmbh_and_co_kg",
        name: "BTI Befestigungstechnik GmbH & Co.KG",
        description: "i18n.collectors.bti_befestigungstechnik_gmbh_and_co_kg.description",
        version: "0",
        website: "https://www.bti.de/shop-de/kundenmenue/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2120082.jpg",
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
        loginUrl: "https://www.bti.de/shop-de/kundenmenue/invoice/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BtiBefestigungstechnikGmbhAndCoKgCollector.CONFIG);
    }
}
