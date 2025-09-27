
import { SketchCollector } from '../../sketchCollector';

export class MixcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "mixcloud",
        name: "Mixcloud",
        description: "i18n.collectors.mixcloud.description",
        version: "0",
        website: "https://www.mixcloud.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973182.jpg",
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
        entryUrl: "https://www.mixcloud.com/",
    }

    constructor() {
        super(MixcloudCollector.CONFIG);
    }
}
