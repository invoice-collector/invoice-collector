
import { SketchCollector } from '../../sketchCollector';

export class AmpidoCollector extends SketchCollector {

    static CONFIG = {
        id: "ampido",
        name: "ampido",
        description: "i18n.collectors.ampido.description",
        version: "0",
        website: "https://www.ampido.com/myRents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1540039.jpg",
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
        entryUrl: "https://www.ampido.com/myRents",
    }

    constructor() {
        super(AmpidoCollector.CONFIG);
    }
}
