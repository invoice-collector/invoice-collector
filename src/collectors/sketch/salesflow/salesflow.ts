
import { SketchCollector } from '../../sketchCollector';

export class SalesflowCollector extends SketchCollector {

    static CONFIG = {
        id: "salesflow",
        name: "Salesflow",
        description: "i18n.collectors.salesflow.description",
        version: "0",
        website: "https://salesflow.io/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1259391.jpg",
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
        entryUrl: "https://salesflow.io/invoices",
    }

    constructor() {
        super(SalesflowCollector.CONFIG);
    }
}
