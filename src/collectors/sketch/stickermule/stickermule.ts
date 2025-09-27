
import { SketchCollector } from '../../sketchCollector';

export class StickermuleCollector extends SketchCollector {

    static CONFIG = {
        id: "stickermule",
        name: "StickerMule",
        description: "i18n.collectors.stickermule.description",
        version: "0",
        website: "https://www.stickermule.com/de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102819.jpg",
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
        entryUrl: "https://www.stickermule.com/de/account/orders",
    }

    constructor() {
        super(StickermuleCollector.CONFIG);
    }
}
