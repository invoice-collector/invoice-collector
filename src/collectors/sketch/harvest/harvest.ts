
import { SketchCollector } from '../../sketchCollector';

export class HarvestCollector extends SketchCollector {

    static CONFIG = {
        id: "harvest",
        name: "Harvest",
        description: "i18n.collectors.harvest.description",
        version: "0",
        website: "https://id.getharvest.com/harvest/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8685.jpg",
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
        entryUrl: "https://id.getharvest.com/harvest/sign_in",
    }

    constructor() {
        super(HarvestCollector.CONFIG);
    }
}
