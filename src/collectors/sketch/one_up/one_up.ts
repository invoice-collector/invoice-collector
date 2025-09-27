
import { SketchCollector } from '../../sketchCollector';

export class OneUpCollector extends SketchCollector {

    static CONFIG = {
        id: "one_up",
        name: "one up",
        description: "i18n.collectors.one_up.description",
        version: "0",
        website: "https://app.oneup.com/#customer_invoice/search?after=2023-01-01&before=2023-12-31&on_date=date&sort=due_date&sortOrder=asc&filter=payment-paid",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2228057.jpg",
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
        entryUrl: "https://app.oneup.com/#customer_invoice/search?after=2023-01-01&before=2023-12-31&on_date=date&sort=due_date&sortOrder=asc&filter=payment-paid",
    }

    constructor() {
        super(OneUpCollector.CONFIG);
    }
}
