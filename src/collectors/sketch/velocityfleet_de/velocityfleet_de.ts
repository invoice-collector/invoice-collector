
import { SketchCollector } from '../../sketchCollector';

export class VelocityfleetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "velocityfleet_de",
        name: "velocityfleet (.de)",
        description: "i18n.collectors.velocityfleet_de.description",
        version: "0",
        website: "https://www.velocityfleet.com/app/invoices/list/all-invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128515.jpg",
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
        entryUrl: "https://www.velocityfleet.com/app/invoices/list/all-invoices/",
    }

    constructor() {
        super(VelocityfleetDeCollector.CONFIG);
    }
}
