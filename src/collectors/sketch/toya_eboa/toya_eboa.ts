
import { SketchCollector } from '../../sketchCollector';

export class ToyaEboaCollector extends SketchCollector {

    static CONFIG = {
        id: "toya_eboa",
        name: "TOYA eBOA",
        description: "i18n.collectors.toya_eboa.description",
        version: "0",
        website: "https://eboa.toya.net.pl/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378377.jpg",
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
        entryUrl: "https://eboa.toya.net.pl/payment",
    }

    constructor() {
        super(ToyaEboaCollector.CONFIG);
    }
}
