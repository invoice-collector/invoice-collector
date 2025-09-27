
import { SketchCollector } from '../../sketchCollector';

export class ChasePaymentechOnlineReportingCollector extends SketchCollector {

    static CONFIG = {
        id: "chase_paymentech_online_reporting",
        name: "Chase Paymentech Online Reporting",
        description: "i18n.collectors.chase_paymentech_online_reporting.description",
        version: "0",
        website: "https://secure.paymentech.com/signin/pages/login.faces?CT_ORIG_URL=https%3A%2F%2Fsecure.paymentech.com%3A443%2Fportal%2F&ct_orig_uri=%2Fportal%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399633.jpg",
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
        entryUrl: "https://secure.paymentech.com/signin/pages/login.faces?CT_ORIG_URL=https%3A%2F%2Fsecure.paymentech.com%3A443%2Fportal%2F&ct_orig_uri=%2Fportal%2F",
    }

    constructor() {
        super(ChasePaymentechOnlineReportingCollector.CONFIG);
    }
}
