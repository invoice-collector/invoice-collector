
import { SketchCollector } from '../../sketchCollector';

export class Cash4lessCollector extends SketchCollector {

    static CONFIG = {
        id: "cash4less",
        name: "CASH4LESS",
        description: "i18n.collectors.cash4less.description",
        version: "0",
        website: "https://portal.cash4less.org/app/portal/de_DE/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63068.jpg",
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
        entryUrl: "https://portal.cash4less.org/app/portal/de_DE/invoices",
    }

    constructor() {
        super(Cash4lessCollector.CONFIG);
    }
}
