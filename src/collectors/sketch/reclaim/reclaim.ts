
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReclaimCollector extends SketchCollector {

    static CONFIG = {
        id: "reclaim",
        name: "Reclaim",
        description: "i18n.collectors.reclaim.description",
        version: "0",
        website: "https://invoice.stripe.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1918676.jpg",
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
        entryUrl: "https://invoice.stripe.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReclaimCollector.CONFIG);
    }
}
