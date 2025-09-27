
import { SketchCollector } from '../../sketchCollector';

export class DebitoorCollector extends SketchCollector {

    static CONFIG = {
        id: "debitoor",
        name: "Debitoor",
        description: "i18n.collectors.debitoor.description",
        version: "0",
        website: "https://app.debitoor.com/partnersite/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/497.jpg",
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
        entryUrl: "https://app.debitoor.com/partnersite/login/",
    }

    constructor() {
        super(DebitoorCollector.CONFIG);
    }
}
