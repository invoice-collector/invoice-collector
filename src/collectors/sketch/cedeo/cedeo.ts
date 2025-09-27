
import { SketchCollector } from '../../sketchCollector';

export class CedeoCollector extends SketchCollector {

    static CONFIG = {
        id: "cedeo",
        name: "Cedeo",
        description: "i18n.collectors.cedeo.description",
        version: "0",
        website: "https://www.cedeo.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778803.jpg",
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
        entryUrl: "https://www.cedeo.fr/",
    }

    constructor() {
        super(CedeoCollector.CONFIG);
    }
}
