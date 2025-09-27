
import { SketchCollector } from '../../sketchCollector';

export class FirstpromoterCollector extends SketchCollector {

    static CONFIG = {
        id: "firstpromoter",
        name: "FirstPromoter",
        description: "i18n.collectors.firstpromoter.description",
        version: "0",
        website: "https://firstpromoter.com/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/772710.jpg",
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
        entryUrl: "https://firstpromoter.com/sign_in",
    }

    constructor() {
        super(FirstpromoterCollector.CONFIG);
    }
}
