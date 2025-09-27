
import { SketchCollector } from '../../sketchCollector';

export class ZerotierCollector extends SketchCollector {

    static CONFIG = {
        id: "zerotier",
        name: "Zerotier",
        description: "i18n.collectors.zerotier.description",
        version: "0",
        website: "https://www.zerotier.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526366.jpg",
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
        entryUrl: "https://www.zerotier.com/",
    }

    constructor() {
        super(ZerotierCollector.CONFIG);
    }
}
