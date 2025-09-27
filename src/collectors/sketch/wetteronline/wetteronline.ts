
import { SketchCollector } from '../../sketchCollector';

export class WetteronlineCollector extends SketchCollector {

    static CONFIG = {
        id: "wetteronline",
        name: "WetterOnline",
        description: "i18n.collectors.wetteronline.description",
        version: "0",
        website: "https://www.wetteronline.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46112.jpg",
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
        entryUrl: "https://www.wetteronline.de/login",
    }

    constructor() {
        super(WetteronlineCollector.CONFIG);
    }
}
