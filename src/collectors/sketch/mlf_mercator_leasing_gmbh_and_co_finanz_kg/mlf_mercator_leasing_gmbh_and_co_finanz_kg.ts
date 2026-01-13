
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MlfMercatorLeasingGmbhAndCoFinanzKgCollector extends SketchCollector {

    static CONFIG = {
        id: "mlf_mercator_leasing_gmbh_and_co_finanz_kg",
        name: "MLF Mercator-Leasing GmbH & Co. Finanz-KG",
        description: "i18n.collectors.mlf_mercator_leasing_gmbh_and_co_finanz_kg.description",
        version: "0",
        website: "https://messenger.mercator-leasing.de/login.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200224.jpg",
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
        loginUrl: "https://messenger.mercator-leasing.de/login.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MlfMercatorLeasingGmbhAndCoFinanzKgCollector.CONFIG);
    }
}
