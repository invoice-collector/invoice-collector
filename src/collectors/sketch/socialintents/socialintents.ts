
import { SketchCollector } from '../../sketchCollector';

export class SocialintentsCollector extends SketchCollector {

    static CONFIG = {
        id: "socialintents",
        name: "SocialIntents",
        description: "i18n.collectors.socialintents.description",
        version: "0",
        website: "https://www.socialintents.com/plan.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/427342.jpg",
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
        entryUrl: "https://www.socialintents.com/plan.do",
    }

    constructor() {
        super(SocialintentsCollector.CONFIG);
    }
}
