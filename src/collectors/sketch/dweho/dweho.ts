
import { SketchCollector } from '../../sketchCollector';

export class DwehoCollector extends SketchCollector {

    static CONFIG = {
        id: "dweho",
        name: "Dweho",
        description: "i18n.collectors.dweho.description",
        version: "0",
        website: "https://espaceximi.colibriwithus.com/dweo/client/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118637.jpg",
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
        entryUrl: "https://espaceximi.colibriwithus.com/dweo/client/",
    }

    constructor() {
        super(DwehoCollector.CONFIG);
    }
}
