
import { SketchCollector } from '../../sketchCollector';

export class ProvesourceCollector extends SketchCollector {

    static CONFIG = {
        id: "provesource",
        name: "ProveSource",
        description: "i18n.collectors.provesource.description",
        version: "0",
        website: "https://console.provesrc.com/#/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148969.jpg",
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
        entryUrl: "https://console.provesrc.com/#/billing",
    }

    constructor() {
        super(ProvesourceCollector.CONFIG);
    }
}
