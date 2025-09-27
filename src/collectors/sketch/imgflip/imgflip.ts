
import { SketchCollector } from '../../sketchCollector';

export class ImgflipCollector extends SketchCollector {

    static CONFIG = {
        id: "imgflip",
        name: "IMGFlip",
        description: "i18n.collectors.imgflip.description",
        version: "0",
        website: "https://imgflip.com/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645387.jpg",
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
        entryUrl: "https://imgflip.com/billing-history",
    }

    constructor() {
        super(ImgflipCollector.CONFIG);
    }
}
