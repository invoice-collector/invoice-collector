
import { SketchCollector } from '../../sketchCollector';

export class Apps4rentCollector extends SketchCollector {

    static CONFIG = {
        id: "apps4rent",
        name: "Apps4Rent",
        description: "i18n.collectors.apps4rent.description",
        version: "0",
        website: "https://billing.apps4rent.com/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89120.jpg",
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
        entryUrl: "https://billing.apps4rent.com/clientarea.php",
    }

    constructor() {
        super(Apps4rentCollector.CONFIG);
    }
}
