
import { SketchCollector } from '../../sketchCollector';

export class WpmuDevCollector extends SketchCollector {

    static CONFIG = {
        id: "wpmu_dev",
        name: "WPMU DEV",
        description: "i18n.collectors.wpmu_dev.description",
        version: "0",
        website: "https://premium.wpmudev.org/hub/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74716.jpg",
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
        entryUrl: "https://premium.wpmudev.org/hub/account/",
    }

    constructor() {
        super(WpmuDevCollector.CONFIG);
    }
}
