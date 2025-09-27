
import { SketchCollector } from '../../sketchCollector';

export class OrangeEsCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_es",
        name: "Orange.es",
        description: "i18n.collectors.orange_es.description",
        version: "0",
        website: "https://www.orange.es/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8748.jpg",
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
        entryUrl: "https://www.orange.es/",
    }

    constructor() {
        super(OrangeEsCollector.CONFIG);
    }
}
