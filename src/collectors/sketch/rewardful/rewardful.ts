
import { SketchCollector } from '../../sketchCollector';

export class RewardfulCollector extends SketchCollector {

    static CONFIG = {
        id: "rewardful",
        name: "Rewardful",
        description: "i18n.collectors.rewardful.description",
        version: "0",
        website: "https://app.getrewardful.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/794830.jpg",
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
        entryUrl: "https://app.getrewardful.com/login",
    }

    constructor() {
        super(RewardfulCollector.CONFIG);
    }
}
