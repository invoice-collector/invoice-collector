
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KenjoCollector extends SketchCollector {

    static CONFIG = {
        id: "kenjo",
        name: "Kenjo",
        description: "i18n.collectors.kenjo.description",
        version: "0",
        website: "https://app.kenjo.io/cloud/settings/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241850.jpg",
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
        entryUrl: "https://app.kenjo.io/cloud/settings/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KenjoCollector.CONFIG);
    }
}
