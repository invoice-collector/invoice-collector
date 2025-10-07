
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HrsGroupOnlineInvoicePortalCollector extends SketchCollector {

    static CONFIG = {
        id: "hrs_group_online_invoice_portal",
        name: "HRS Group - Online Invoice Portal",
        description: "i18n.collectors.hrs_group_online_invoice_portal.description",
        version: "0",
        website: "https://hotelservice.hrs.com/hpp/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216.jpg",
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
        entryUrl: "https://hotelservice.hrs.com/hpp/Account/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HrsGroupOnlineInvoicePortalCollector.CONFIG);
    }
}
