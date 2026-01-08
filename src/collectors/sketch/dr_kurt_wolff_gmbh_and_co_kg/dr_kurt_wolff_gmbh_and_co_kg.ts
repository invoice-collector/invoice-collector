
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DrKurtWolffGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "dr_kurt_wolff_gmbh_and_co_kg",
        name: "Dr. Kurt Wolff GmbH & Co. KG",
        description: "i18n.collectors.dr_kurt_wolff_gmbh_and_co_kg.description",
        version: "0",
        website: "https://www.alcina-professional.com/de-de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2049629.jpg",
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
        loginUrl: "https://www.alcina-professional.com/de-de/account/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrKurtWolffGmbhAndCoKgCollector.CONFIG);
    }
}
