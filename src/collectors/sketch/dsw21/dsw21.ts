
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Dsw21Collector extends SketchCollector {

    static CONFIG = {
        id: "dsw21",
        name: "dsw21",
        description: "i18n.collectors.dsw21.description",
        version: "0",
        website: "https://meinabo.dsw21.de/de/company/0001248199/type/default/agreement/0007008793/main/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2520757.jpg",
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
        entryUrl: "https://meinabo.dsw21.de/de/company/0001248199/type/default/agreement/0007008793/main/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Dsw21Collector.CONFIG);
    }
}
