
import { SketchCollector } from '../../sketchCollector';

export class SmartServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_services",
        name: "Smart-Services",
        description: "i18n.collectors.smart_services.description",
        version: "0",
        website: "https://client.smart-services.com/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/435449.jpg",
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
        entryUrl: "https://client.smart-services.com/factures",
    }

    constructor() {
        super(SmartServicesCollector.CONFIG);
    }
}
