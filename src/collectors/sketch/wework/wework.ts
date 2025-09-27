
import { SketchCollector } from '../../sketchCollector';

export class WeworkCollector extends SketchCollector {

    static CONFIG = {
        id: "wework",
        name: "WeWork",
        description: "i18n.collectors.wework.description",
        version: "0",
        website: "https://members.wework.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8551.jpg",
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
        entryUrl: "https://members.wework.com/account",
    }

    constructor() {
        super(WeworkCollector.CONFIG);
    }
}
