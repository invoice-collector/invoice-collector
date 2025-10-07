
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuickbooksOnlineFrCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_online_fr",
        name: "Quickbooks Online Fr",
        description: "i18n.collectors.quickbooks_online_fr.description",
        version: "0",
        website: "https://quickbooks.intuit.com/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121680.jpg",
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
        entryUrl: "https://quickbooks.intuit.com/fr",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuickbooksOnlineFrCollector.CONFIG);
    }
}
