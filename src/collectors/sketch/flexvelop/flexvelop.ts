
import { SketchCollector } from '../../sketchCollector';

export class FlexvelopCollector extends SketchCollector {

    static CONFIG = {
        id: "flexvelop",
        name: "flexvelop",
        description: "i18n.collectors.flexvelop.description",
        version: "0",
        website: "https://www.flexvelop.com/customer-dashboard/contracts/FLEX-Y2X6H7X7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1881936.jpg",
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
        entryUrl: "https://www.flexvelop.com/customer-dashboard/contracts/FLEX-Y2X6H7X7",
    }

    constructor() {
        super(FlexvelopCollector.CONFIG);
    }
}
