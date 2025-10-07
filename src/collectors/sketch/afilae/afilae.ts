
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AfilaeCollector extends SketchCollector {

    static CONFIG = {
        id: "afilae",
        name: "afilae",
        description: "i18n.collectors.afilae.description",
        version: "0",
        website: "https://app.affilae.com/fr/advertiser/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135467.jpg",
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
        entryUrl: "https://app.affilae.com/fr/advertiser/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AfilaeCollector.CONFIG);
    }
}
