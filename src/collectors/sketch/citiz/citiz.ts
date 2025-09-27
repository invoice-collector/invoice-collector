
import { SketchCollector } from '../../sketchCollector';

export class CitizCollector extends SketchCollector {

    static CONFIG = {
        id: "citiz",
        name: "Citiz",
        description: "i18n.collectors.citiz.description",
        version: "0",
        website: "https://service.citiz.fr/webapp/my_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654757.jpg",
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
        entryUrl: "https://service.citiz.fr/webapp/my_invoices",
    }

    constructor() {
        super(CitizCollector.CONFIG);
    }
}
