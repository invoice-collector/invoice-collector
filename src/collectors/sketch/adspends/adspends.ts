
import { SketchCollector } from '../../sketchCollector';

export class AdspendsCollector extends SketchCollector {

    static CONFIG = {
        id: "adspends",
        name: "Adspends",
        description: "i18n.collectors.adspends.description",
        version: "0",
        website: "https://adspends.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417725.jpg",
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
        entryUrl: "https://adspends.com/login",
    }

    constructor() {
        super(AdspendsCollector.CONFIG);
    }
}
