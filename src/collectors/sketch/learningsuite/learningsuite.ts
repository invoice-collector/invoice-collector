
import { SketchCollector } from '../../sketchCollector';

export class LearningsuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "learningsuite",
        name: "Learningsuite",
        description: "i18n.collectors.learningsuite.description",
        version: "0",
        website: "https://selfservice.billwerk.com/portal/account.html#/0ySASdq3qjjXviMs8Z7XgQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440650.jpg",
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
        entryUrl: "https://selfservice.billwerk.com/portal/account.html#/0ySASdq3qjjXviMs8Z7XgQ",
    }

    constructor() {
        super(LearningsuiteCollector.CONFIG);
    }
}
