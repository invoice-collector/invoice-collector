
import { SketchCollector } from '../../sketchCollector';

export class ParcelhubCollector extends SketchCollector {

    static CONFIG = {
        id: "parcelhub",
        name: "ParcelHub",
        description: "i18n.collectors.parcelhub.description",
        version: "0",
        website: "https://accounts.parcelhub.net/query/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778997.jpg",
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
        entryUrl: "https://accounts.parcelhub.net/query/invoices",
    }

    constructor() {
        super(ParcelhubCollector.CONFIG);
    }
}
