
import { SketchCollector } from '../../sketchCollector';

export class RKomCollector extends SketchCollector {

    static CONFIG = {
        id: "r_kom",
        name: "R-KOM",
        description: "i18n.collectors.r_kom.description",
        version: "0",
        website: "https://kundenportal.r-kom.de/intern/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9234.jpg",
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
        entryUrl: "https://kundenportal.r-kom.de/intern/",
    }

    constructor() {
        super(RKomCollector.CONFIG);
    }
}
