
import { SketchCollector } from '../../sketchCollector';

export class YellowImagesCollector extends SketchCollector {

    static CONFIG = {
        id: "yellow_images",
        name: "Yellow Images",
        description: "i18n.collectors.yellow_images.description",
        version: "0",
        website: "https://yellowimages.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197399.jpg",
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
        entryUrl: "https://yellowimages.com/my-account/orders/",
    }

    constructor() {
        super(YellowImagesCollector.CONFIG);
    }
}
