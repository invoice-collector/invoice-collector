
import { SketchCollector } from '../../sketchCollector';

export class LoyaltyBrainBehindCollector extends SketchCollector {

    static CONFIG = {
        id: "loyalty_brain_behind",
        name: "loyalty.brain-behind",
        description: "i18n.collectors.loyalty_brain_behind.description",
        version: "0",
        website: "https://loyalty.brain-behind.com/VM_Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440779.jpg",
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
        entryUrl: "https://loyalty.brain-behind.com/VM_Login.aspx",
    }

    constructor() {
        super(LoyaltyBrainBehindCollector.CONFIG);
    }
}
