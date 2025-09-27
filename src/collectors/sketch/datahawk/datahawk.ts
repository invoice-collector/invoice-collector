
import { SketchCollector } from '../../sketchCollector';

export class DatahawkCollector extends SketchCollector {

    static CONFIG = {
        id: "datahawk",
        name: "DataHawk",
        description: "i18n.collectors.datahawk.description",
        version: "0",
        website: "https://analytics.datahawk.co/app/36451/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649611.jpg",
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
        entryUrl: "https://analytics.datahawk.co/app/36451/settings/invoices",
    }

    constructor() {
        super(DatahawkCollector.CONFIG);
    }
}
