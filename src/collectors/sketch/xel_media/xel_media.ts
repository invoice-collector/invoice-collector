
import { SketchCollector } from '../../sketchCollector';

export class XelMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "xel_media",
        name: "Xel Media",
        description: "i18n.collectors.xel_media.description",
        version: "0",
        website: "https://controlcenter.xel.nl/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32566.jpg",
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
        entryUrl: "https://controlcenter.xel.nl/",
    }

    constructor() {
        super(XelMediaCollector.CONFIG);
    }
}
