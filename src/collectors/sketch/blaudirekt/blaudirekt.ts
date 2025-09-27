
import { SketchCollector } from '../../sketchCollector';

export class BlaudirektCollector extends SketchCollector {

    static CONFIG = {
        id: "blaudirekt",
        name: "BlauDirekt",
        description: "i18n.collectors.blaudirekt.description",
        version: "0",
        website: "https://www.maklerinfo.biz/maklerportal/?show=finanzen%2Fmakler",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/413903.jpg",
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
        entryUrl: "https://www.maklerinfo.biz/maklerportal/?show=finanzen%2Fmakler",
    }

    constructor() {
        super(BlaudirektCollector.CONFIG);
    }
}
