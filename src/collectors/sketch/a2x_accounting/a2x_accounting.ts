
import { SketchCollector } from '../../sketchCollector';

export class A2xAccountingCollector extends SketchCollector {

    static CONFIG = {
        id: "a2x_accounting",
        name: "A2X Accounting",
        description: "i18n.collectors.a2x_accounting.description",
        version: "0",
        website: "https://www.a2xaccounting.com/login#billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1173086.jpg",
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
    }

    constructor() {
        super(A2xAccountingCollector.CONFIG);
    }
}
