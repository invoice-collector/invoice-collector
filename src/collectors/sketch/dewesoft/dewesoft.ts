
import { SketchCollector } from '../../sketchCollector';

export class DewesoftCollector extends SketchCollector {

    static CONFIG = {
        id: "dewesoft",
        name: "DEWESoft",
        description: "i18n.collectors.dewesoft.description",
        version: "0",
        website: "https://account.dewesoft.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/517020.jpg",
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
        entryUrl: "https://account.dewesoft.com/invoices",
    }

    constructor() {
        super(DewesoftCollector.CONFIG);
    }
}
