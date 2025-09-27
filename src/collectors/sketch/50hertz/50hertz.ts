
import { SketchCollector } from '../../sketchCollector';

export class _50hertzCollector extends SketchCollector {

    static CONFIG = {
        id: "50hertz",
        name: "50hertz",
        description: "i18n.collectors.50hertz.description",
        version: "0",
        website: "https://rechnungsportal.50hertz.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194676.jpg",
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
        entryUrl: "https://rechnungsportal.50hertz.com/",
    }

    constructor() {
        super(_50hertzCollector.CONFIG);
    }
}
