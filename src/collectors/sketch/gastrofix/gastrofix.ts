
import { SketchCollector } from '../../sketchCollector';

export class GastrofixCollector extends SketchCollector {

    static CONFIG = {
        id: "gastrofix",
        name: "GASTROFIX",
        description: "i18n.collectors.gastrofix.description",
        version: "0",
        website: "https://cloud.gastrofix.com/client/#/financial/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74795.jpg",
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
        entryUrl: "https://cloud.gastrofix.com/client/#/financial/invoices",
    }

    constructor() {
        super(GastrofixCollector.CONFIG);
    }
}
