
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuickbooksOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "quickbooks_online",
        name: "Quickbooks Online",
        description: "i18n.collectors.quickbooks_online.description",
        version: "0",
        website: "https://qbo.intuit.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6409.jpg",
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
        entryUrl: "https://qbo.intuit.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuickbooksOnlineCollector.CONFIG);
    }
}
