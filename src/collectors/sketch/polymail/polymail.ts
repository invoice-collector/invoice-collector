
import { SketchCollector } from '../../sketchCollector';

export class PolymailCollector extends SketchCollector {

    static CONFIG = {
        id: "polymail",
        name: "Polymail",
        description: "i18n.collectors.polymail.description",
        version: "0",
        website: "https://app.polymail.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25782.jpg",
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
        entryUrl: "https://app.polymail.io/login",
    }

    constructor() {
        super(PolymailCollector.CONFIG);
    }
}
