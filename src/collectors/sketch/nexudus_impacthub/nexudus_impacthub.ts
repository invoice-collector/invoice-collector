
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NexudusImpacthubCollector extends SketchCollector {

    static CONFIG = {
        id: "nexudus_impacthub",
        name: "Nexudus ImpactHub",
        description: "i18n.collectors.nexudus_impacthub.description",
        version: "0",
        website: "https://impacthubhamburg.spaces.nexudus.com/profile/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221882.jpg",
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
        entryUrl: "https://impacthubhamburg.spaces.nexudus.com/profile/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NexudusImpacthubCollector.CONFIG);
    }
}
