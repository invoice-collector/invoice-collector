
import { SketchCollector } from '../../sketchCollector';

export class SimplesellCollector extends SketchCollector {

    static CONFIG = {
        id: "simplesell",
        name: "Simplesell",
        description: "i18n.collectors.simplesell.description",
        version: "0",
        website: "https://app.simplesell.de/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2785496.jpg",
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
        entryUrl: "https://app.simplesell.de/user/invoices",
    }

    constructor() {
        super(SimplesellCollector.CONFIG);
    }
}
