
import { SketchCollector } from '../../sketchCollector';

export class PreecoCollector extends SketchCollector {

    static CONFIG = {
        id: "preeco",
        name: "Preeco",
        description: "i18n.collectors.preeco.description",
        version: "0",
        website: "https://app.preeco.de/organizations/324/master-data/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203790.jpg",
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
        entryUrl: "https://app.preeco.de/organizations/324/master-data/invoices",
    }

    constructor() {
        super(PreecoCollector.CONFIG);
    }
}
