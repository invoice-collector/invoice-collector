
import { SketchCollector } from '../../sketchCollector';

export class MosyleBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "mosyle_business",
        name: "Mosyle Business",
        description: "i18n.collectors.mosyle_business.description",
        version: "0",
        website: "https://mybusiness.mosyle.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/168438.jpg",
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
        entryUrl: "https://mybusiness.mosyle.com/",
    }

    constructor() {
        super(MosyleBusinessCollector.CONFIG);
    }
}
