
import { SketchCollector } from '../../sketchCollector';

export class CloudconvertCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudconvert",
        name: "cloudconvert",
        description: "i18n.collectors.cloudconvert.description",
        version: "0",
        website: "https://cloudconvert.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/946194.jpg",
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
        entryUrl: "https://cloudconvert.com/login",
    }

    constructor() {
        super(CloudconvertCollector.CONFIG);
    }
}
