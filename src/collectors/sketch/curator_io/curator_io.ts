
import { SketchCollector } from '../../sketchCollector';

export class CuratorIoCollector extends SketchCollector {

    static CONFIG = {
        id: "curator_io",
        name: "curator.io",
        description: "i18n.collectors.curator_io.description",
        version: "0",
        website: "https://app.curator.io/company/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863002.jpg",
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
        entryUrl: "https://app.curator.io/company/invoices",
    }

    constructor() {
        super(CuratorIoCollector.CONFIG);
    }
}
