
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BamboraCollector extends SketchCollector {

    static CONFIG = {
        id: "bambora",
        name: "Bambora",
        description: "i18n.collectors.bambora.description",
        version: "0",
        website: "https://reports.bambora.com/merchants/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/762500.jpg",
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
        entryUrl: "https://reports.bambora.com/merchants/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BamboraCollector.CONFIG);
    }
}
