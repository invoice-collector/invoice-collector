
import { SketchCollector } from '../../sketchCollector';

export class CrowdfarmingCollector extends SketchCollector {

    static CONFIG = {
        id: "crowdfarming",
        name: "CrowdFarming",
        description: "i18n.collectors.crowdfarming.description",
        version: "0",
        website: "https://www.crowdfarming.com/de/private-zone/my-order/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484302.jpg",
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
        entryUrl: "https://www.crowdfarming.com/de/private-zone/my-order/list",
    }

    constructor() {
        super(CrowdfarmingCollector.CONFIG);
    }
}
