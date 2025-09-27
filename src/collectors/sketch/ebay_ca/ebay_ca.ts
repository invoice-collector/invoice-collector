
import { SketchCollector } from '../../sketchCollector';

export class EbayCaCollector extends SketchCollector {

    static CONFIG = {
        id: "ebay_ca",
        name: "ebay.ca",
        description: "i18n.collectors.ebay_ca.description",
        version: "0",
        website: "https://cgi3.ebay.ca/ws/eBayISAPI.dll?MfcISAPICommand=ViewAccount&acctpagetype=0&invoiceYear=0&sortorder=1&daysback=-1&startmonth=&startday=&startyear=&endmonth=&endday=&endyear=&TabSelected=PaymentsRefunds&cid=002",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/132303.jpg",
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
        entryUrl: "https://cgi3.ebay.ca/ws/eBayISAPI.dll?MfcISAPICommand=ViewAccount&acctpagetype=0&invoiceYear=0&sortorder=1&daysback=-1&startmonth=&startday=&startyear=&endmonth=&endday=&endyear=&TabSelected=PaymentsRefunds&cid=002",
    }

    constructor() {
        super(EbayCaCollector.CONFIG);
    }
}
