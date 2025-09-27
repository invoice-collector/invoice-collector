
import { SketchCollector } from '../../sketchCollector';

export class BaseCrmCollector extends SketchCollector {

    static CONFIG = {
        id: "base_crm",
        name: "Base CRM",
        description: "i18n.collectors.base_crm.description",
        version: "0",
        website: "https://core.futuresimple.com/sales/users/login?__hstc=102910175.3dc3dad61841786b8d73a5a4670b1527.1516721944299.1516721944299.1516721944299.1&__hssc=102910175.1.1516721944299&__hsfp=26496145",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8557.jpg",
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
        entryUrl: "https://core.futuresimple.com/sales/users/login?__hstc=102910175.3dc3dad61841786b8d73a5a4670b1527.1516721944299.1516721944299.1516721944299.1&__hssc=102910175.1.1516721944299&__hsfp=26496145",
    }

    constructor() {
        super(BaseCrmCollector.CONFIG);
    }
}
