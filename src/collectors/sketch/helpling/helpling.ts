
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HelplingCollector extends SketchCollector {

    static CONFIG = {
        id: "helpling",
        name: "Helpling",
        description: "i18n.collectors.helpling.description",
        version: "0",
        website: "https://www.helpling.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9667.jpg",
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
        entryUrl: "https://www.helpling.de/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HelplingCollector.CONFIG);
    }
}
