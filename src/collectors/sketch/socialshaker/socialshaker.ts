
import { SketchCollector } from '../../sketchCollector';

export class SocialshakerCollector extends SketchCollector {

    static CONFIG = {
        id: "socialshaker",
        name: "Socialshaker",
        description: "i18n.collectors.socialshaker.description",
        version: "0",
        website: "https://www.socialshaker.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64603.jpg",
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
        entryUrl: "https://www.socialshaker.com/",
    }

    constructor() {
        super(SocialshakerCollector.CONFIG);
    }
}
