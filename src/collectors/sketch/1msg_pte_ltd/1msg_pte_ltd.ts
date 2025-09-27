
import { SketchCollector } from '../../sketchCollector';

export class _1msgPteLtdCollector extends SketchCollector {

    static CONFIG = {
        id: "1msg_pte_ltd",
        name: "1msg Pte Ltd",
        description: "i18n.collectors.1msg_pte_ltd.description",
        version: "0",
        website: "https://my.1msg.io/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919723.jpg",
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
        entryUrl: "https://my.1msg.io/billing",
    }

    constructor() {
        super(_1msgPteLtdCollector.CONFIG);
    }
}
