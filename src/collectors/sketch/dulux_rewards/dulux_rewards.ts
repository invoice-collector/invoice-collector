
import { SketchCollector } from '../../sketchCollector';

export class DuluxRewardsCollector extends SketchCollector {

    static CONFIG = {
        id: "dulux_rewards",
        name: "Dulux Rewards",
        description: "i18n.collectors.dulux_rewards.description",
        version: "0",
        website: "https://rewards.dulux.com.au",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/415681.jpg",
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
        entryUrl: "https://rewards.dulux.com.au",
    }

    constructor() {
        super(DuluxRewardsCollector.CONFIG);
    }
}
