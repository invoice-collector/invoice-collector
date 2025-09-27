
import { SketchCollector } from '../../sketchCollector';

export class VikingPestControlCollector extends SketchCollector {

    static CONFIG = {
        id: "viking_pest_control",
        name: "Viking Pest Control",
        description: "i18n.collectors.viking_pest_control.description",
        version: "0",
        website: "https://vikingpest.pestconnect.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2798830.jpg",
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
        entryUrl: "https://vikingpest.pestconnect.com/login",
    }

    constructor() {
        super(VikingPestControlCollector.CONFIG);
    }
}
