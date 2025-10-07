
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DrutexCollector extends SketchCollector {

    static CONFIG = {
        id: "drutex",
        name: "Drutex",
        description: "i18n.collectors.drutex.description",
        version: "0",
        website: "https://e-portal.drutex.pl/de/invoice/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1256024.jpg",
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
        entryUrl: "https://e-portal.drutex.pl/de/invoice/list",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DrutexCollector.CONFIG);
    }
}
