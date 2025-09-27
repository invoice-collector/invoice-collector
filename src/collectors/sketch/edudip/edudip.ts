
import { SketchCollector } from '../../sketchCollector';

export class EdudipCollector extends SketchCollector {

    static CONFIG = {
        id: "edudip",
        name: "edudip",
        description: "i18n.collectors.edudip.description",
        version: "0",
        website: "https://www.edudip.com/de/intern/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10898.jpg",
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
        entryUrl: "https://www.edudip.com/de/intern/rechnungen",
    }

    constructor() {
        super(EdudipCollector.CONFIG);
    }
}
