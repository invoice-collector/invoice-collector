
import { SketchCollector } from '../../sketchCollector';

export class ChurnbusterCollector extends SketchCollector {

    static CONFIG = {
        id: "churnbuster",
        name: "ChurnBuster",
        description: "i18n.collectors.churnbuster.description",
        version: "0",
        website: "https://app.churnbuster.io/accounts/paintable-2/live/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/211166.jpg",
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
        entryUrl: "https://app.churnbuster.io/accounts/paintable-2/live/settings/billing",
    }

    constructor() {
        super(ChurnbusterCollector.CONFIG);
    }
}
