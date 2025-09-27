
import { SketchCollector } from '../../sketchCollector';

export class TelekomCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_cloud",
        name: "Telekom Cloud",
        description: "i18n.collectors.telekom_cloud.description",
        version: "0",
        website: "https://apps.telekomcloud.com/account/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10767.jpg",
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
        entryUrl: "https://apps.telekomcloud.com/account/bills",
    }

    constructor() {
        super(TelekomCloudCollector.CONFIG);
    }
}
