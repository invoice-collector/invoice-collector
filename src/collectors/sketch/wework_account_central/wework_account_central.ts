
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WeworkAccountCentralCollector extends SketchCollector {

    static CONFIG = {
        id: "wework_account_central",
        name: "WeWork Account Central",
        description: "i18n.collectors.wework_account_central.description",
        version: "0",
        website: "https://accounts.wework.com/dashboard/balance-and-invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2106062.jpg",
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
        entryUrl: "https://accounts.wework.com/dashboard/balance-and-invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WeworkAccountCentralCollector.CONFIG);
    }
}
