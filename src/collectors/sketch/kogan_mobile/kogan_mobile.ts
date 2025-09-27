
import { SketchCollector } from '../../sketchCollector';

export class KoganMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "kogan_mobile",
        name: "Kogan Mobile",
        description: "i18n.collectors.kogan_mobile.description",
        version: "0",
        website: "https://accounts.koganmobile.com.au/customer/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9374.jpg",
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
        entryUrl: "https://accounts.koganmobile.com.au/customer/login",
    }

    constructor() {
        super(KoganMobileCollector.CONFIG);
    }
}
