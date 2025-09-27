
import { SketchCollector } from '../../sketchCollector';

export class KitchnCollector extends SketchCollector {

    static CONFIG = {
        id: "kitchn",
        name: "Kitchn",
        description: "i18n.collectors.kitchn.description",
        version: "0",
        website: "https://app.kitchnware.io/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4466179.jpg",
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
        entryUrl: "https://app.kitchnware.io/settings/billing",
    }

    constructor() {
        super(KitchnCollector.CONFIG);
    }
}
