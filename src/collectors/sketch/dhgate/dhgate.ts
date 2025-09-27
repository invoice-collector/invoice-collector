
import { SketchCollector } from '../../sketchCollector';

export class DhgateCollector extends SketchCollector {

    static CONFIG = {
        id: "dhgate",
        name: "DHgate",
        description: "i18n.collectors.dhgate.description",
        version: "0",
        website: "https://dg.dhgate.com/buyerordmng/orderList/list.do?pahttps://dg.dhgate.com/buyerordmng/orderList/list.do?params.linkType=100rams.linkType=100",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778914.jpg",
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
        entryUrl: "https://dg.dhgate.com/buyerordmng/orderList/list.do?pahttps://dg.dhgate.com/buyerordmng/orderList/list.do?params.linkType=100rams.linkType=100",
    }

    constructor() {
        super(DhgateCollector.CONFIG);
    }
}
