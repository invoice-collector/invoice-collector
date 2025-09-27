
import { SketchCollector } from '../../sketchCollector';

export class FlibcoComCollector extends SketchCollector {

    static CONFIG = {
        id: "flibco_com",
        name: "flibco.com",
        description: "i18n.collectors.flibco_com.description",
        version: "0",
        website: "https://www.flibco.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77691.jpg",
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
        entryUrl: "https://www.flibco.com",
    }

    constructor() {
        super(FlibcoComCollector.CONFIG);
    }
}
