
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KundenmeisterCollector extends SketchCollector {

    static CONFIG = {
        id: "kundenmeister",
        name: "KundenMeister",
        description: "i18n.collectors.kundenmeister.description",
        version: "0",
        website: "https://www.kundenmeister.com/crm/index.php/invoices/listInvoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/874597.jpg",
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
        entryUrl: "https://www.kundenmeister.com/crm/index.php/invoices/listInvoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KundenmeisterCollector.CONFIG);
    }
}
