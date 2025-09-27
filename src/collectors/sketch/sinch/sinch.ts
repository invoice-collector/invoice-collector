
import { SketchCollector } from '../../sketchCollector';

export class SinchCollector extends SketchCollector {

    static CONFIG = {
        id: "sinch",
        name: "Sinch",
        description: "i18n.collectors.sinch.description",
        version: "0",
        website: "https://dashboard.sinch.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778125.jpg",
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
        entryUrl: "https://dashboard.sinch.com/settings/billing",
    }

    constructor() {
        super(SinchCollector.CONFIG);
    }
}
