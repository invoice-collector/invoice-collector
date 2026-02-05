
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RsbRetailServiceBankGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "rsb_retail_service_bank_gmbh",
        name: "RSB Retail+Service Bank GmbH",
        description: "i18n.collectors.rsb_retail_service_bank_gmbh.description",
        version: "0",
        website: "https://portal.rsb-bank.de/RSBPortal/app/index.jsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777321.jpg",
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
        loginUrl: "https://portal.rsb-bank.de/RSBPortal/app/index.jsf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RsbRetailServiceBankGmbhCollector.CONFIG);
    }
}
