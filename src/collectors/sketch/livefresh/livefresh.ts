
import { SketchCollector } from '../../sketchCollector';

export class LivefreshCollector extends SketchCollector {

    static CONFIG = {
        id: "livefresh",
        name: "Livefresh",
        description: "i18n.collectors.livefresh.description",
        version: "0",
        website: "https://livefresh.de/apps/download-pdf/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192206.jpg",
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
        entryUrl: "https://livefresh.de/apps/download-pdf/",
    }

    constructor() {
        super(LivefreshCollector.CONFIG);
    }
}
