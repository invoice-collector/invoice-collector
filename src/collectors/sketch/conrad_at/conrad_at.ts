
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConradAtCollector extends SketchCollector {

    static CONFIG = {
        id: "conrad_at",
        name: "Conrad.at",
        description: "i18n.collectors.conrad_at.description",
        version: "0",
        website: "https://www.conrad.at/de/account.html#/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39448.jpg",
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
        entryUrl: "https://www.conrad.at/de/account.html#/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConradAtCollector.CONFIG);
    }
}
