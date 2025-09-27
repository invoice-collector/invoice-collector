
import { SketchCollector } from '../../sketchCollector';

export class IBEEntgeltmanagementCollector extends SketchCollector {

    static CONFIG = {
        id: "i_b_e_entgeltmanagement",
        name: "I.B.E. ENTGELTMANAGEMENT",
        description: "i18n.collectors.i_b_e_entgeltmanagement.description",
        version: "0",
        website: "https://www.institut-be.de/ukc/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2785621.jpg",
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
        entryUrl: "https://www.institut-be.de/ukc/index.php",
    }

    constructor() {
        super(IBEEntgeltmanagementCollector.CONFIG);
    }
}
