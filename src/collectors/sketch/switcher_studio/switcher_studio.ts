
import { SketchCollector } from '../../sketchCollector';

export class SwitcherStudioCollector extends SketchCollector {

    static CONFIG = {
        id: "switcher_studio",
        name: "Switcher Studio",
        description: "i18n.collectors.switcher_studio.description",
        version: "0",
        website: "https://dashboard.switcherstudio.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759701.jpg",
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
        entryUrl: "https://dashboard.switcherstudio.com/billing",
    }

    constructor() {
        super(SwitcherStudioCollector.CONFIG);
    }
}
