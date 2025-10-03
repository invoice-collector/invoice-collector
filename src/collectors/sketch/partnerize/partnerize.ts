
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PartnerizeCollector extends SketchCollector {

    static CONFIG = {
        id: "partnerize",
        name: "Partnerize",
        description: "i18n.collectors.partnerize.description",
        version: "0",
        website: "https://console.partnerize.com/v2/payments/selfbill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132278.jpg",
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
        entryUrl: "https://console.partnerize.com/v2/payments/selfbill",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PartnerizeCollector.CONFIG);
    }
}
