
import { SketchCollector } from '../../sketchCollector';

export class RivalIqCollector extends SketchCollector {

    static CONFIG = {
        id: "rival_iq",
        name: "Rival IQ",
        description: "i18n.collectors.rival_iq.description",
        version: "0",
        website: "https://app.rivaliq.com/account/receipts/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333301.jpg",
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
        entryUrl: "https://app.rivaliq.com/account/receipts/",
    }

    constructor() {
        super(RivalIqCollector.CONFIG);
    }
}
