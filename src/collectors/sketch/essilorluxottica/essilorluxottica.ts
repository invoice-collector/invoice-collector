
import { SketchCollector } from '../../sketchCollector';

export class EssilorluxotticaCollector extends SketchCollector {

    static CONFIG = {
        id: "essilorluxottica",
        name: "EssilorLuxottica",
        description: "i18n.collectors.essilorluxottica.description",
        version: "0",
        website: "https://my.essilorluxottica.com/myl-de/de-DE/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2860993.jpg",
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
        entryUrl: "https://my.essilorluxottica.com/myl-de/de-DE/account/invoices",
    }

    constructor() {
        super(EssilorluxotticaCollector.CONFIG);
    }
}
