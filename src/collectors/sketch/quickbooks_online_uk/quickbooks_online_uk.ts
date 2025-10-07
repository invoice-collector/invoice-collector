
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuickbooksOnlineUkCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_online_uk",
        name: "Quickbooks Online UK",
        description: "i18n.collectors.quickbooks_online_uk.description",
        version: "0",
        website: "https://c14.qbo.intuit.com/app/homepage",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107631.jpg",
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
        entryUrl: "https://c14.qbo.intuit.com/app/homepage",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuickbooksOnlineUkCollector.CONFIG);
    }
}
