
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DiscoCollector extends SketchCollector {

    static CONFIG = {
        id: "disco",
        name: "Disco",
        description: "i18n.collectors.disco.description",
        version: "0",
        website: "https://www.billingportal.com/s/disco-usd/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571826.jpg",
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
        entryUrl: "https://www.billingportal.com/s/disco-usd/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DiscoCollector.CONFIG);
    }
}
