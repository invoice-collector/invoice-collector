
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WellsFargoCopierMyaccountsCollector extends SketchCollector {

    static CONFIG = {
        id: "wells_fargo_copier_myaccounts",
        name: "Wells Fargo Copier - MyAccounts",
        description: "i18n.collectors.wells_fargo_copier_myaccounts.description",
        version: "0",
        website: "https://www.myaccounts.wellsfargo.com/lease/external/Reporting.html#Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78135.jpg",
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
        loginUrl: "https://www.myaccounts.wellsfargo.com/lease/external/Reporting.html#Invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WellsFargoCopierMyaccountsCollector.CONFIG);
    }
}
