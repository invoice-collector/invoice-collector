
import { SketchCollector } from '../../sketchCollector';

export class DgnCollector extends SketchCollector {

    static CONFIG = {
        id: "dgn",
        name: "DGN",
        description: "i18n.collectors.dgn.description",
        version: "0",
        website: "https://www.dgn.de/kunde/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43022.jpg",
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
        entryUrl: "https://www.dgn.de/kunde/login",
    }

    constructor() {
        super(DgnCollector.CONFIG);
    }
}
