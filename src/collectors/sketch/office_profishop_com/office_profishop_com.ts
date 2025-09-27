
import { SketchCollector } from '../../sketchCollector';

export class OfficeProfishopComCollector extends SketchCollector {

    static CONFIG = {
        id: "office_profishop_com",
        name: "office-profishop.com",
        description: "i18n.collectors.office_profishop_com.description",
        version: "0",
        website: "https://www.office-profishop.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/663.jpg",
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
        entryUrl: "https://www.office-profishop.com/login.php",
    }

    constructor() {
        super(OfficeProfishopComCollector.CONFIG);
    }
}
