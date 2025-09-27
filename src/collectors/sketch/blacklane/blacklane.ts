
import { SketchCollector } from '../../sketchCollector';

export class BlacklaneCollector extends SketchCollector {

    static CONFIG = {
        id: "blacklane",
        name: "Blacklane",
        description: "i18n.collectors.blacklane.description",
        version: "0",
        website: "https://www.blacklane.com/de/sessions/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28530.jpg",
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
        entryUrl: "https://www.blacklane.com/de/sessions/new",
    }

    constructor() {
        super(BlacklaneCollector.CONFIG);
    }
}
