
import { SketchCollector } from '../../sketchCollector';

export class PreyCollector extends SketchCollector {

    static CONFIG = {
        id: "prey",
        name: "Prey",
        description: "i18n.collectors.prey.description",
        version: "0",
        website: "https://panel.preyproject.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1229731.jpg",
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
        entryUrl: "https://panel.preyproject.com/settings/billing",
    }

    constructor() {
        super(PreyCollector.CONFIG);
    }
}
