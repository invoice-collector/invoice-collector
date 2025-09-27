
import { SketchCollector } from '../../sketchCollector';

export class MixpanelCollector extends SketchCollector {

    static CONFIG = {
        id: "mixpanel",
        name: "Mixpanel",
        description: "i18n.collectors.mixpanel.description",
        version: "0",
        website: "https://mixpanel.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6647.jpg",
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
        entryUrl: "https://mixpanel.com/login/",
    }

    constructor() {
        super(MixpanelCollector.CONFIG);
    }
}
