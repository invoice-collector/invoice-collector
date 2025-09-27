
import { SketchCollector } from '../../sketchCollector';

export class JexcelProCollector extends SketchCollector {

    static CONFIG = {
        id: "jexcel_pro",
        name: "Jexcel Pro",
        description: "i18n.collectors.jexcel_pro.description",
        version: "0",
        website: "https://jexcel.net/me/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/540823.jpg",
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
        entryUrl: "https://jexcel.net/me/invoices",
    }

    constructor() {
        super(JexcelProCollector.CONFIG);
    }
}
