
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DattoGmbhSaasCollector extends SketchCollector {

    static CONFIG = {
        id: "datto_gmbh_saas",
        name: "datto GmbH SaaS",
        description: "i18n.collectors.datto_gmbh_saas.description",
        version: "0",
        website: "https://store.datto.com/account/purchases/monthly-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316267.jpg",
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
        loginUrl: "https://store.datto.com/account/purchases/monthly-invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DattoGmbhSaasCollector.CONFIG);
    }
}
