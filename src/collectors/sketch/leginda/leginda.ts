
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LegindaCollector extends SketchCollector {

    static CONFIG = {
        id: "leginda",
        name: "LEGINDA",
        description: "i18n.collectors.leginda.description",
        version: "0",
        website: "https://www.leginda.de/app/index.php?ACTION=BILL_LIST_CUSTOMER",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/850038.jpg",
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
        entryUrl: "https://www.leginda.de/app/index.php?ACTION=BILL_LIST_CUSTOMER",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LegindaCollector.CONFIG);
    }
}
