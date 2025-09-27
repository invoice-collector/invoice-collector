
import { SketchCollector } from '../../sketchCollector';

export class ConnectwiseCustomerPortalColohouseCollector extends SketchCollector {

    static CONFIG = {
        id: "connectwise_customer_portal_colohouse",
        name: "ConnectWise Customer Portal - Colohouse",
        description: "i18n.collectors.connectwise_customer_portal_colohouse.description",
        version: "0",
        website: "https://na.myconnectwise.net/colohouse?company=colohouse",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/50751.jpg",
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
        entryUrl: "https://na.myconnectwise.net/colohouse?company=colohouse",
    }

    constructor() {
        super(ConnectwiseCustomerPortalColohouseCollector.CONFIG);
    }
}
