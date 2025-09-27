
import { SketchCollector } from '../../sketchCollector';

export class EwerkSachsenwaldEmobilitycloudCollector extends SketchCollector {

    static CONFIG = {
        id: "ewerk_sachsenwald_emobilitycloud",
        name: "eWerk Sachsenwald emobilitycloud",
        description: "i18n.collectors.ewerk_sachsenwald_emobilitycloud.description",
        version: "0",
        website: "https://ewerk.emobilitycloud.com/de/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1421149.jpg",
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
        entryUrl: "https://ewerk.emobilitycloud.com/de/account/receipts",
    }

    constructor() {
        super(EwerkSachsenwaldEmobilitycloudCollector.CONFIG);
    }
}
