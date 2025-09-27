
import { SketchCollector } from '../../sketchCollector';

export class BriefbutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "briefbutler",
        name: "Briefbutler",
        description: "i18n.collectors.briefbutler.description",
        version: "0",
        website: "https://www.briefbutler.at/index.php?page=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/221824.jpg",
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
        entryUrl: "https://www.briefbutler.at/index.php?page=login",
    }

    constructor() {
        super(BriefbutlerCollector.CONFIG);
    }
}
