
import { SketchCollector } from '../../sketchCollector';

export class NextcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "nextcloud",
        name: "Nextcloud",
        description: "i18n.collectors.nextcloud.description",
        version: "0",
        website: "https://portal.nextcloud.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3080897.jpg",
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
        entryUrl: "https://portal.nextcloud.com/login",
    }

    constructor() {
        super(NextcloudCollector.CONFIG);
    }
}
