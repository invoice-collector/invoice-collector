
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DextReceiptBankCollector extends SketchCollector {

    static CONFIG = {
        id: "dext_receipt_bank",
        name: "Dext (Receipt Bank)",
        description: "i18n.collectors.dext_receipt_bank.description",
        version: "0",
        website: "https://app.dext.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6481.jpg",
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
        entryUrl: "https://app.dext.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DextReceiptBankCollector.CONFIG);
    }
}
