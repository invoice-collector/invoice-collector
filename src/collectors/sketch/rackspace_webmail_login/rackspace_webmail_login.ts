
import { SketchCollector } from '../../sketchCollector';

export class RackspaceWebmailLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "rackspace_webmail_login",
        name: "Rackspace - Webmail login",
        description: "i18n.collectors.rackspace_webmail_login.description",
        version: "0",
        website: "https://apps.rackspace.com/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7760.jpg",
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
        entryUrl: "https://apps.rackspace.com/index.php",
    }

    constructor() {
        super(RackspaceWebmailLoginCollector.CONFIG);
    }
}
