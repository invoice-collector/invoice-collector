
import { SketchCollector } from '../../sketchCollector';

export class MerciAppCollector extends SketchCollector {

    static CONFIG = {
        id: "merci_app",
        name: "Merci App",
        description: "i18n.collectors.merci_app.description",
        version: "0",
        website: "https://web.merci-app.com/u/1455021896/settings/subscription?fsu=workspacequickswitcher#subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513818.jpg",
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
        entryUrl: "https://web.merci-app.com/u/1455021896/settings/subscription?fsu=workspacequickswitcher#subscription",
    }

    constructor() {
        super(MerciAppCollector.CONFIG);
    }
}
