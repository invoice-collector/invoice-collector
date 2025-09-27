
import { SketchCollector } from '../../sketchCollector';

export class SocialCaptainCollector extends SketchCollector {

    static CONFIG = {
        id: "social_captain",
        name: "Social Captain",
        description: "i18n.collectors.social_captain.description",
        version: "0",
        website: "https://socialcaptain.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135929.jpg",
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
        entryUrl: "https://socialcaptain.com/billing",
    }

    constructor() {
        super(SocialCaptainCollector.CONFIG);
    }
}
