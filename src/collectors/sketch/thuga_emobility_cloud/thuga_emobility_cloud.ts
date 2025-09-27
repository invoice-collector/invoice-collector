
import { SketchCollector } from '../../sketchCollector';

export class ThugaEmobilityCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "thuga_emobility_cloud",
        name: "Thuga Emobility Cloud",
        description: "i18n.collectors.thuga_emobility_cloud.description",
        version: "0",
        website: "https://thuega-energie.emobilitycloud.com/de/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2520244.jpg",
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
        entryUrl: "https://thuega-energie.emobilitycloud.com/de/account/receipts",
    }

    constructor() {
        super(ThugaEmobilityCloudCollector.CONFIG);
    }
}
