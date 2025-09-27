
import { SketchCollector } from '../../sketchCollector';

export class HelpScoutCollector extends SketchCollector {

    static CONFIG = {
        id: "help_scout",
        name: "Help Scout",
        description: "i18n.collectors.help_scout.description",
        version: "0",
        website: "https://secure.helpscout.net/members/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4485.jpg",
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
        entryUrl: "https://secure.helpscout.net/members/login/",
    }

    constructor() {
        super(HelpScoutCollector.CONFIG);
    }
}
