
import { SketchCollector } from '../../sketchCollector';

export class UmfrageonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "umfrageonline",
        name: "Umfrageonline",
        description: "i18n.collectors.umfrageonline.description",
        version: "0",
        website: "https://www.umfrageonline.com/user/account/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1374767.jpg",
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
        entryUrl: "https://www.umfrageonline.com/user/account/billing/invoices",
    }

    constructor() {
        super(UmfrageonlineCollector.CONFIG);
    }
}
