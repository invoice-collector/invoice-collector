
import { SketchCollector } from '../../sketchCollector';

export class AppsignalCollector extends SketchCollector {

    static CONFIG = {
        id: "appsignal",
        name: "AppSignal",
        description: "i18n.collectors.appsignal.description",
        version: "0",
        website: "https://appsignal.com/sportograf/admin/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64938.jpg",
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
        entryUrl: "https://appsignal.com/sportograf/admin/invoices",
    }

    constructor() {
        super(AppsignalCollector.CONFIG);
    }
}
