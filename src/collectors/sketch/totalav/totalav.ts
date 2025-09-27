
import { SketchCollector } from '../../sketchCollector';

export class TotalavCollector extends SketchCollector {

    static CONFIG = {
        id: "totalav",
        name: "TOTALAV",
        description: "i18n.collectors.totalav.description",
        version: "0",
        website: "https://my.totalav.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899955.jpg",
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
        entryUrl: "https://my.totalav.com/",
    }

    constructor() {
        super(TotalavCollector.CONFIG);
    }
}
