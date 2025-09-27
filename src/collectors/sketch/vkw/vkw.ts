
import { SketchCollector } from '../../sketchCollector';

export class VkwCollector extends SketchCollector {

    static CONFIG = {
        id: "vkw",
        name: "VKW",
        description: "i18n.collectors.vkw.description",
        version: "0",
        website: "https://online-services.vkw.at/powercommerce/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1188419.jpg",
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
        entryUrl: "https://online-services.vkw.at/powercommerce/portal/start",
    }

    constructor() {
        super(VkwCollector.CONFIG);
    }
}
