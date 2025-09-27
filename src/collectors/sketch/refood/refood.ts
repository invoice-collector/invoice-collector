
import { SketchCollector } from '../../sketchCollector';

export class RefoodCollector extends SketchCollector {

    static CONFIG = {
        id: "refood",
        name: "Refood",
        description: "i18n.collectors.refood.description",
        version: "0",
        website: "https://kundenportal.refood.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169139.jpg",
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
        entryUrl: "https://kundenportal.refood.de/documents",
    }

    constructor() {
        super(RefoodCollector.CONFIG);
    }
}
