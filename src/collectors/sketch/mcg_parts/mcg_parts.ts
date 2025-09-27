
import { SketchCollector } from '../../sketchCollector';

export class McgPartsCollector extends SketchCollector {

    static CONFIG = {
        id: "mcg_parts",
        name: "MCG-Parts",
        description: "i18n.collectors.mcg_parts.description",
        version: "0",
        website: "https://www.mcg-parts.de/customer/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1722871.jpg",
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
        entryUrl: "https://www.mcg-parts.de/customer/invoice",
    }

    constructor() {
        super(McgPartsCollector.CONFIG);
    }
}
