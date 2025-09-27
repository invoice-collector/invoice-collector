
import { SketchCollector } from '../../sketchCollector';

export class NetflixCollector extends SketchCollector {

    static CONFIG = {
        id: "netflix",
        name: "Netflix",
        description: "i18n.collectors.netflix.description",
        version: "0",
        website: "https://www.netflix.com/BillingActivity",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8819.jpg",
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
        entryUrl: "https://www.netflix.com/BillingActivity",
    }

    constructor() {
        super(NetflixCollector.CONFIG);
    }
}
