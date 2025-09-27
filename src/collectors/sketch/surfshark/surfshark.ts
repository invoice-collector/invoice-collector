
import { SketchCollector } from '../../sketchCollector';

export class SurfsharkCollector extends SketchCollector {

    static CONFIG = {
        id: "surfshark",
        name: "Surfshark",
        description: "i18n.collectors.surfshark.description",
        version: "0",
        website: "https://my.surfshark.com/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541366.jpg",
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
        entryUrl: "https://my.surfshark.com/account/subscription",
    }

    constructor() {
        super(SurfsharkCollector.CONFIG);
    }
}
