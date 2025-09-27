
import { SketchCollector } from '../../sketchCollector';

export class SocialWarfarePluginCollector extends SketchCollector {

    static CONFIG = {
        id: "social_warfare_plugin",
        name: "Social Warfare Plugin",
        description: "i18n.collectors.social_warfare_plugin.description",
        version: "0",
        website: "https://warfareplugins.com/wp-login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28528.jpg",
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
        entryUrl: "https://warfareplugins.com/wp-login.php",
    }

    constructor() {
        super(SocialWarfarePluginCollector.CONFIG);
    }
}
