
import { SketchCollector } from '../../sketchCollector';

export class FusionIotCollector extends SketchCollector {

    static CONFIG = {
        id: "fusion_iot",
        name: "Fusion IoT",
        description: "i18n.collectors.fusion_iot.description",
        version: "0",
        website: "https://portal.fusion-iot.de/sign/in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2550840.jpg",
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
        entryUrl: "https://portal.fusion-iot.de/sign/in",
    }

    constructor() {
        super(FusionIotCollector.CONFIG);
    }
}
