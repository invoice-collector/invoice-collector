
import { SketchCollector } from '../../sketchCollector';

export class CloudcannonCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudcannon",
        name: "cloudcannon",
        description: "i18n.collectors.cloudcannon.description",
        version: "0",
        website: "https://app.cloudcannon.com/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23766.jpg",
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
        entryUrl: "https://app.cloudcannon.com/users/sign_in",
    }

    constructor() {
        super(CloudcannonCollector.CONFIG);
    }
}
