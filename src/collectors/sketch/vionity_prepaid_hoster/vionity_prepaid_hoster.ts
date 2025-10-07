
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VionityPrepaidHosterCollector extends SketchCollector {

    static CONFIG = {
        id: "vionity_prepaid_hoster",
        name: "Vionity - Prepaid-Hoster",
        description: "i18n.collectors.vionity_prepaid_hoster.description",
        version: "0",
        website: "https://www.vionity.de/clientarea/my/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230520.jpg",
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
        entryUrl: "https://www.vionity.de/clientarea/my/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VionityPrepaidHosterCollector.CONFIG);
    }
}
