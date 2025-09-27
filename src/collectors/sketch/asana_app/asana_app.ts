
import { SketchCollector } from '../../sketchCollector';

export class AsanaAppCollector extends SketchCollector {

    static CONFIG = {
        id: "asana_app",
        name: "asana - app",
        description: "i18n.collectors.asana_app.description",
        version: "0",
        website: "https://app.asana.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81812.jpg",
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
        entryUrl: "https://app.asana.com/",
    }

    constructor() {
        super(AsanaAppCollector.CONFIG);
    }
}
