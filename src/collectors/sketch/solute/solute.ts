
import { SketchCollector } from '../../sketchCollector';

export class SoluteCollector extends SketchCollector {

    static CONFIG = {
        id: "solute",
        name: "Solute",
        description: "i18n.collectors.solute.description",
        version: "0",
        website: "https://partner.solute.de/my/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3340108.jpg",
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
        entryUrl: "https://partner.solute.de/my/invoices",
    }

    constructor() {
        super(SoluteCollector.CONFIG);
    }
}
