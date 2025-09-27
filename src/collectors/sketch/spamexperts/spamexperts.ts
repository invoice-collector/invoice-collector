
import { SketchCollector } from '../../sketchCollector';

export class SpamexpertsCollector extends SketchCollector {

    static CONFIG = {
        id: "spamexperts",
        name: "SpamExperts",
        description: "i18n.collectors.spamexperts.description",
        version: "0",
        website: "https://my.spamexperts.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/317.jpg",
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
        entryUrl: "https://my.spamexperts.com/clientarea.php",
    }

    constructor() {
        super(SpamexpertsCollector.CONFIG);
    }
}
