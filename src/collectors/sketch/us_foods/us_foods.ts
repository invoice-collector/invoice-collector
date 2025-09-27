
import { SketchCollector } from '../../sketchCollector';

export class UsFoodsCollector extends SketchCollector {

    static CONFIG = {
        id: "us_foods",
        name: "US Foods",
        description: "i18n.collectors.us_foods.description",
        version: "0",
        website: "https://www3.usfoods.com/order/faces/oracle/webcenter/portalapp/pages/invoice/invoiceInquiry.jspx?_adf.ctrl-state=c4yt4t9gs_4&_afrLoop=73457099228509#!",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060692.jpg",
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
        entryUrl: "https://www3.usfoods.com/order/faces/oracle/webcenter/portalapp/pages/invoice/invoiceInquiry.jspx?_adf.ctrl-state=c4yt4t9gs_4&_afrLoop=73457099228509#!",
    }

    constructor() {
        super(UsFoodsCollector.CONFIG);
    }
}
