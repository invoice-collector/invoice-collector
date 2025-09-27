
import { SketchCollector } from '../../sketchCollector';

export class As24ByTotalCollector extends SketchCollector {

    static CONFIG = {
        id: "as24_by_total",
        name: "AS24 | BY TOTAL",
        description: "i18n.collectors.as24_by_total.description",
        version: "0",
        website: "https://extranet.as24.com/extranet/login?langue=fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/943604.jpg",
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
        entryUrl: "https://extranet.as24.com/extranet/login?langue=fr",
    }

    constructor() {
        super(As24ByTotalCollector.CONFIG);
    }
}
