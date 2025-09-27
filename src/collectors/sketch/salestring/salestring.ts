
import { SketchCollector } from '../../sketchCollector';

export class SalestringCollector extends SketchCollector {

    static CONFIG = {
        id: "salestring",
        name: "Salestring",
        description: "i18n.collectors.salestring.description",
        version: "0",
        website: "http://salestring.hasoffers.com/publisher/#!/billing?limit=10&page=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120873.jpg",
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
        entryUrl: "http://salestring.hasoffers.com/publisher/#!/billing?limit=10&page=1",
    }

    constructor() {
        super(SalestringCollector.CONFIG);
    }
}
