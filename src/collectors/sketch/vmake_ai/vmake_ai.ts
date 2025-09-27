
import { SketchCollector } from '../../sketchCollector';

export class VmakeAiCollector extends SketchCollector {

    static CONFIG = {
        id: "vmake_ai",
        name: "vmake.ai",
        description: "i18n.collectors.vmake_ai.description",
        version: "0",
        website: "https://www.weshop.ai/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3014705.jpg",
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
        entryUrl: "https://www.weshop.ai/order",
    }

    constructor() {
        super(VmakeAiCollector.CONFIG);
    }
}
