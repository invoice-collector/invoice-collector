
import { SketchCollector } from '../../sketchCollector';

export class EveronCollector extends SketchCollector {

    static CONFIG = {
        id: "everon",
        name: "Everon",
        description: "i18n.collectors.everon.description",
        version: "0",
        website: "https://evbox.everon.io/account/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3110440.jpg",
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
        entryUrl: "https://evbox.everon.io/account/billing-history",
    }

    constructor() {
        super(EveronCollector.CONFIG);
    }
}
