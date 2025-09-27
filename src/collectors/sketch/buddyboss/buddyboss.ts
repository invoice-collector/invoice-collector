
import { SketchCollector } from '../../sketchCollector';

export class BuddybossCollector extends SketchCollector {

    static CONFIG = {
        id: "buddyboss",
        name: "BuddyBoss",
        description: "i18n.collectors.buddyboss.description",
        version: "0",
        website: "https://my.buddyboss.com/wp-login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46756.jpg",
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
        entryUrl: "https://my.buddyboss.com/wp-login.php",
    }

    constructor() {
        super(BuddybossCollector.CONFIG);
    }
}
