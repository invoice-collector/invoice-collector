
import { SketchCollector } from '../../sketchCollector';

export class PrintcarrierComCollector extends SketchCollector {

    static CONFIG = {
        id: "printcarrier_com",
        name: "PrintCarrier.com",
        description: "i18n.collectors.printcarrier_com.description",
        version: "0",
        website: "https://www.printcarrier.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32366.jpg",
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
        entryUrl: "https://www.printcarrier.com/",
    }

    constructor() {
        super(PrintcarrierComCollector.CONFIG);
    }
}
