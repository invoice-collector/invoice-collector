
import { SketchCollector } from '../../sketchCollector';

export class VoipraiderCollector extends SketchCollector {

    static CONFIG = {
        id: "voipraider",
        name: "VoipRaider",
        description: "i18n.collectors.voipraider.description",
        version: "0",
        website: "https://www.voipraider.com/purchases/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14814.jpg",
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
        entryUrl: "https://www.voipraider.com/purchases/",
    }

    constructor() {
        super(VoipraiderCollector.CONFIG);
    }
}
