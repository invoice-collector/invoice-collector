
import { SketchCollector } from '../../sketchCollector';

export class BacklinkedCollector extends SketchCollector {

    static CONFIG = {
        id: "backlinked",
        name: "Backlinked",
        description: "i18n.collectors.backlinked.description",
        version: "0",
        website: "https://app.backlinked.de/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777339.jpg",
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
        entryUrl: "https://app.backlinked.de/orders",
    }

    constructor() {
        super(BacklinkedCollector.CONFIG);
    }
}
