
import { SketchCollector } from '../../sketchCollector';

export class OkaritoCollector extends SketchCollector {

    static CONFIG = {
        id: "okarito",
        name: "Okarito",
        description: "i18n.collectors.okarito.description",
        version: "0",
        website: "https://app.okarito.io/administration/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746803.jpg",
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
        entryUrl: "https://app.okarito.io/administration/invoices",
    }

    constructor() {
        super(OkaritoCollector.CONFIG);
    }
}
