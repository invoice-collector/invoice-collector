
import { SketchCollector } from '../../sketchCollector';

export class BuddyCollector extends SketchCollector {

    static CONFIG = {
        id: "buddy",
        name: "Buddy",
        description: "i18n.collectors.buddy.description",
        version: "0",
        website: "http://www.buddy.works",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34309.jpg",
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
        entryUrl: "http://www.buddy.works",
    }

    constructor() {
        super(BuddyCollector.CONFIG);
    }
}
