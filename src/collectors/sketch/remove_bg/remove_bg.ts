
import { SketchCollector } from '../../sketchCollector';

export class RemoveBgCollector extends SketchCollector {

    static CONFIG = {
        id: "remove_bg",
        name: "Remove.bg",
        description: "i18n.collectors.remove_bg.description",
        version: "0",
        website: "https://www.remove.bg/profile#payment-billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/163759.jpg",
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
        entryUrl: "https://www.remove.bg/profile#payment-billing",
    }

    constructor() {
        super(RemoveBgCollector.CONFIG);
    }
}
