
import { SketchCollector } from '../../sketchCollector';

export class SimonMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "simon_mobile",
        name: "SIMon mobile",
        description: "i18n.collectors.simon_mobile.description",
        version: "0",
        website: "https://www.simonmobile.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/975504.jpg",
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
        entryUrl: "https://www.simonmobile.de/login",
    }

    constructor() {
        super(SimonMobileCollector.CONFIG);
    }
}
