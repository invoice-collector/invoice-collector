
import { SketchCollector } from '../../sketchCollector';

export class PhaxioCollector extends SketchCollector {

    static CONFIG = {
        id: "phaxio",
        name: "Phaxio",
        description: "i18n.collectors.phaxio.description",
        version: "0",
        website: "https://console.phaxio.com/sf_guard_users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26540.jpg",
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
        entryUrl: "https://console.phaxio.com/sf_guard_users/sign_in",
    }

    constructor() {
        super(PhaxioCollector.CONFIG);
    }
}
