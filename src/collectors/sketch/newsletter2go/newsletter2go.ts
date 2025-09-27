
import { SketchCollector } from '../../sketchCollector';

export class Newsletter2goCollector extends SketchCollector {

    static CONFIG = {
        id: "newsletter2go",
        name: "Newsletter2Go",
        description: "i18n.collectors.newsletter2go.description",
        version: "0",
        website: "https://ui.newsletter2go.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/918.jpg",
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
        entryUrl: "https://ui.newsletter2go.com/login",
    }

    constructor() {
        super(Newsletter2goCollector.CONFIG);
    }
}
