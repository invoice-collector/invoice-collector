
import { SketchCollector } from '../../sketchCollector';

export class AssurancevieComCollector extends SketchCollector {

    static CONFIG = {
        id: "assurancevie_com",
        name: "assurancevie.com",
        description: "i18n.collectors.assurancevie_com.description",
        version: "0",
        website: "https://www.assurancevie.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778910.jpg",
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
        entryUrl: "https://www.assurancevie.com/",
    }

    constructor() {
        super(AssurancevieComCollector.CONFIG);
    }
}
