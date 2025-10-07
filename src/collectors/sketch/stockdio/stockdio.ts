
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StockdioCollector extends SketchCollector {

    static CONFIG = {
        id: "stockdio",
        name: "Stockdio",
        description: "i18n.collectors.stockdio.description",
        version: "0",
        website: "https://services.stockdio.com/account#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553342.jpg",
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
        entryUrl: "https://services.stockdio.com/account#invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StockdioCollector.CONFIG);
    }
}
