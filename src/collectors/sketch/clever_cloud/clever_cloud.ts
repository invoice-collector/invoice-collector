
import { SketchCollector } from '../../sketchCollector';

export class CleverCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "clever_cloud",
        name: "Clever Cloud",
        description: "i18n.collectors.clever_cloud.description",
        version: "0",
        website: "https://api.clever-cloud.com/v2/sessions/login?fromAuthorize=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654781.jpg",
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
        entryUrl: "https://api.clever-cloud.com/v2/sessions/login?fromAuthorize=true",
    }

    constructor() {
        super(CleverCloudCollector.CONFIG);
    }
}
