
import { SketchCollector } from '../../sketchCollector';

export class SghNetCollector extends SketchCollector {

    static CONFIG = {
        id: "sgh_net",
        name: "SGH Net",
        description: "i18n.collectors.sgh_net.description",
        version: "0",
        website: "https://cp.sgh-net.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59325.jpg",
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
        entryUrl: "https://cp.sgh-net.de/login",
    }

    constructor() {
        super(SghNetCollector.CONFIG);
    }
}
