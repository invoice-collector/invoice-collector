
import { SketchCollector } from '../../sketchCollector';

export class OptiOfficeCollector extends SketchCollector {

    static CONFIG = {
        id: "opti_office",
        name: "Opti Office",
        description: "i18n.collectors.opti_office.description",
        version: "0",
        website: "https://optioffice.eu/optioffice/login/piti.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034194.jpg",
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
        entryUrl: "https://optioffice.eu/optioffice/login/piti.php",
    }

    constructor() {
        super(OptiOfficeCollector.CONFIG);
    }
}
