
import { SketchCollector } from '../../sketchCollector';

export class FccEnvironmentalCollector extends SketchCollector {

    static CONFIG = {
        id: "fcc_environmental",
        name: "FCC Environmental",
        description: "i18n.collectors.fcc_environmental.description",
        version: "0",
        website: "https://fccenvironmental.com/pay-your-bill/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2525942.jpg",
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
        entryUrl: "https://fccenvironmental.com/pay-your-bill/",
    }

    constructor() {
        super(FccEnvironmentalCollector.CONFIG);
    }
}
