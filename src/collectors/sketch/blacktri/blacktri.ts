
import { SketchCollector } from '../../sketchCollector';

export class BlacktriCollector extends SketchCollector {

    static CONFIG = {
        id: "blacktri",
        name: "blacktri",
        description: "i18n.collectors.blacktri.description",
        version: "0",
        website: "https://www.blacktri.com/de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/547.jpg",
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
        entryUrl: "https://www.blacktri.com/de/login/",
    }

    constructor() {
        super(BlacktriCollector.CONFIG);
    }
}
