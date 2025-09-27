
import { SketchCollector } from '../../sketchCollector';

export class PrtcCollector extends SketchCollector {

    static CONFIG = {
        id: "prtc",
        name: "PRTC",
        description: "i18n.collectors.prtc.description",
        version: "0",
        website: "https://prtc.smarthub.coop/Login.html#login:",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87703.jpg",
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
        entryUrl: "https://prtc.smarthub.coop/Login.html#login:",
    }

    constructor() {
        super(PrtcCollector.CONFIG);
    }
}
