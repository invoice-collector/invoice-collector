
import { SketchCollector } from '../../sketchCollector';

export class LinkedinAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "linkedin_ads",
        name: "Linkedin Ads",
        description: "i18n.collectors.linkedin_ads.description",
        version: "0",
        website: "https://www.linkedin.com/campaignmanager/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131727.jpg",
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
        entryUrl: "https://www.linkedin.com/campaignmanager/login",
    }

    constructor() {
        super(LinkedinAdsCollector.CONFIG);
    }
}
