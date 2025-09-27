
import { SketchCollector } from '../../sketchCollector';

export class CopyscapeCollector extends SketchCollector {

    static CONFIG = {
        id: "copyscape",
        name: "Copyscape",
        description: "i18n.collectors.copyscape.description",
        version: "0",
        website: "https://www.copyscape.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55085.jpg",
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
        entryUrl: "https://www.copyscape.com/login.php",
    }

    constructor() {
        super(CopyscapeCollector.CONFIG);
    }
}
