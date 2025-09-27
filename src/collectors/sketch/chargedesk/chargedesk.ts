
import { SketchCollector } from '../../sketchCollector';

export class ChargedeskCollector extends SketchCollector {

    static CONFIG = {
        id: "chargedesk",
        name: "ChargeDesk",
        description: "i18n.collectors.chargedesk.description",
        version: "0",
        website: "https://chargedesk.com/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64900.jpg",
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
        entryUrl: "https://chargedesk.com/account/billing",
    }

    constructor() {
        super(ChargedeskCollector.CONFIG);
    }
}
