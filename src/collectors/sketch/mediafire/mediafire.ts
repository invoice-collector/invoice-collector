
import { SketchCollector } from '../../sketchCollector';

export class MediafireCollector extends SketchCollector {

    static CONFIG = {
        id: "mediafire",
        name: "MediaFire",
        description: "i18n.collectors.mediafire.description",
        version: "0",
        website: "https://www.mediafire.com/ssl_login.php?type=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/387.jpg",
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
        entryUrl: "https://www.mediafire.com/ssl_login.php?type=login",
    }

    constructor() {
        super(MediafireCollector.CONFIG);
    }
}
