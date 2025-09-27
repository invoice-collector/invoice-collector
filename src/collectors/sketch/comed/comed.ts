
import { SketchCollector } from '../../sketchCollector';

export class ComedCollector extends SketchCollector {

    static CONFIG = {
        id: "comed",
        name: "ComEd",
        description: "i18n.collectors.comed.description",
        version: "0",
        website: "http://www.comed.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8807.jpg",
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
        entryUrl: "http://www.comed.com",
    }

    constructor() {
        super(ComedCollector.CONFIG);
    }
}
