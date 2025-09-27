
import { SketchCollector } from '../../sketchCollector';

export class EflowCollector extends SketchCollector {

    static CONFIG = {
        id: "eflow",
        name: "eFlow",
        description: "i18n.collectors.eflow.description",
        version: "0",
        website: "https://www.eflow.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91964.jpg",
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
        entryUrl: "https://www.eflow.ie/",
    }

    constructor() {
        super(EflowCollector.CONFIG);
    }
}
