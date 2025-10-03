
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class A2xAccountingCollector extends SketchCollector {

    static CONFIG = {
        id: "a2x_accounting",
        name: "A2X Accounting",
        description: "i18n.collectors.a2x_accounting.description",
        version: "0",
        website: "https://www.a2xaccounting.com/login#billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173086.jpg",
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
        entryUrl: "https://www.a2xaccounting.com/login#billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(A2xAccountingCollector.CONFIG);
    }
}
