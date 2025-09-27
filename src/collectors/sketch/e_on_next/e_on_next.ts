
import { SketchCollector } from '../../sketchCollector';

export class EOnNextCollector extends SketchCollector {

    static CONFIG = {
        id: "e_on_next",
        name: "E.ON next",
        description: "i18n.collectors.e_on_next.description",
        version: "0",
        website: "https://www.eonnext.com/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/798521.jpg",
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
        entryUrl: "https://www.eonnext.com/dashboard/",
    }

    constructor() {
        super(EOnNextCollector.CONFIG);
    }
}
