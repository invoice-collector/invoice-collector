
import { SketchCollector } from '../../sketchCollector';

export class GruberLogisticsCollector extends SketchCollector {

    static CONFIG = {
        id: "gruber_logistics",
        name: "Gruber Logistics",
        description: "i18n.collectors.gruber_logistics.description",
        version: "0",
        website: "https://mydesk.gruber-logistics.com/customer-invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/516930.jpg",
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
        entryUrl: "https://mydesk.gruber-logistics.com/customer-invoice",
    }

    constructor() {
        super(GruberLogisticsCollector.CONFIG);
    }
}
