
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeRusselsheimEmobilitycloudCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_russelsheim_emobilitycloud",
        name: "Stadtwerke Russelsheim Emobilitycloud",
        description: "i18n.collectors.stadtwerke_russelsheim_emobilitycloud.description",
        version: "0",
        website: "https://stadtwerke-ruesselsheim.emobilitycloud.com/de/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1627042.jpg",
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
        entryUrl: "https://stadtwerke-ruesselsheim.emobilitycloud.com/de/account/receipts",
    }

    constructor() {
        super(StadtwerkeRusselsheimEmobilitycloudCollector.CONFIG);
    }
}
