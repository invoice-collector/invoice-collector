
import { SketchCollector } from '../../sketchCollector';

export class GhvExtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "ghv_extranet",
        name: "GHV - Extranet",
        description: "i18n.collectors.ghv_extranet.description",
        version: "0",
        website: "https://www.ghv-extranet.de/postbox.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693408.jpg",
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
        entryUrl: "https://www.ghv-extranet.de/postbox.php",
    }

    constructor() {
        super(GhvExtranetCollector.CONFIG);
    }
}
