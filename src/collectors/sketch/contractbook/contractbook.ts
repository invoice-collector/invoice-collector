
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ContractbookCollector extends SketchCollector {

    static CONFIG = {
        id: "contractbook",
        name: "Contractbook",
        description: "i18n.collectors.contractbook.description",
        version: "0",
        website: "https://app.contractbook.com/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/522397.jpg",
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
        entryUrl: "https://app.contractbook.com/documents",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ContractbookCollector.CONFIG);
    }
}
