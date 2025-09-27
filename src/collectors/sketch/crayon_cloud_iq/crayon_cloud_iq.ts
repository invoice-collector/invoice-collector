
import { SketchCollector } from '../../sketchCollector';

export class CrayonCloudIqCollector extends SketchCollector {

    static CONFIG = {
        id: "crayon_cloud_iq",
        name: "Crayon Cloud iQ",
        description: "i18n.collectors.crayon_cloud_iq.description",
        version: "0",
        website: "https://cloudiq.crayon.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035250.jpg",
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
        entryUrl: "https://cloudiq.crayon.com/",
    }

    constructor() {
        super(CrayonCloudIqCollector.CONFIG);
    }
}
