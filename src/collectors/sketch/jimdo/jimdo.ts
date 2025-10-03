
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JimdoCollector extends SketchCollector {

    static CONFIG = {
        id: "jimdo",
        name: "Jimdo",
        description: "i18n.collectors.jimdo.description",
        version: "0",
        website: "http://e.jimdo.com/app/siteadmin/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524.jpg",
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
        entryUrl: "http://e.jimdo.com/app/siteadmin/billing/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JimdoCollector.CONFIG);
    }
}
