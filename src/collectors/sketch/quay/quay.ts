
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuayCollector extends SketchCollector {

    static CONFIG = {
        id: "quay",
        name: "quay",
        description: "i18n.collectors.quay.description",
        version: "0",
        website: "https://quay.io/organization/hereyourcompany/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211129.jpg",
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
        entryUrl: "https://quay.io/organization/hereyourcompany/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuayCollector.CONFIG);
    }
}
