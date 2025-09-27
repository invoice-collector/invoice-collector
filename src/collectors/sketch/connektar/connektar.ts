
import { SketchCollector } from '../../sketchCollector';

export class ConnektarCollector extends SketchCollector {

    static CONFIG = {
        id: "connektar",
        name: "Connektar",
        description: "i18n.collectors.connektar.description",
        version: "0",
        website: "https://www.connektar.de/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59279.jpg",
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
        entryUrl: "https://www.connektar.de/dashboard",
    }

    constructor() {
        super(ConnektarCollector.CONFIG);
    }
}
