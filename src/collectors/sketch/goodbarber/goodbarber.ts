
import { SketchCollector } from '../../sketchCollector';

export class GoodbarberCollector extends SketchCollector {

    static CONFIG = {
        id: "goodbarber",
        name: "GoodBarber",
        description: "i18n.collectors.goodbarber.description",
        version: "0",
        website: "https://www.goodbarber.com/reseller/manage/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50281.jpg",
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
        entryUrl: "https://www.goodbarber.com/reseller/manage/invoices",
    }

    constructor() {
        super(GoodbarberCollector.CONFIG);
    }
}
