
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DoitCollector extends SketchCollector {

    static CONFIG = {
        id: "doit",
        name: "DoIT",
        description: "i18n.collectors.doit.description",
        version: "0",
        website: "https://hello.doit-intl.com/customers/cEuOWlBA69HBBazHZ2Hd/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/664276.jpg",
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
        entryUrl: "https://hello.doit-intl.com/customers/cEuOWlBA69HBBazHZ2Hd/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DoitCollector.CONFIG);
    }
}
