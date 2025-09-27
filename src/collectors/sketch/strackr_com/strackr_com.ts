
import { SketchCollector } from '../../sketchCollector';

export class StrackrComCollector extends SketchCollector {

    static CONFIG = {
        id: "strackr_com",
        name: "Strackr.com",
        description: "i18n.collectors.strackr_com.description",
        version: "0",
        website: "https://app.strackr.com/subscription/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1603748.jpg",
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
        entryUrl: "https://app.strackr.com/subscription/invoices",
    }

    constructor() {
        super(StrackrComCollector.CONFIG);
    }
}
