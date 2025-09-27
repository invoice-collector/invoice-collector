
import { SketchCollector } from '../../sketchCollector';

export class IziviaCollector extends SketchCollector {

    static CONFIG = {
        id: "izivia",
        name: "Izivia",
        description: "i18n.collectors.izivia.description",
        version: "0",
        website: "https://pro.izivia-ig.fr/#/main/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4382082.jpg",
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
        entryUrl: "https://pro.izivia-ig.fr/#/main/invoices",
    }

    constructor() {
        super(IziviaCollector.CONFIG);
    }
}
