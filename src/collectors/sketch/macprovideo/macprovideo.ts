
import { SketchCollector } from '../../sketchCollector';

export class MacprovideoCollector extends SketchCollector {

    static CONFIG = {
        id: "macprovideo",
        name: "macProVideo",
        description: "i18n.collectors.macprovideo.description",
        version: "0",
        website: "https://www.macprovideo.com/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107059.jpg",
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
        entryUrl: "https://www.macprovideo.com/profile",
    }

    constructor() {
        super(MacprovideoCollector.CONFIG);
    }
}
