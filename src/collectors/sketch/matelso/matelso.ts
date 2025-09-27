
import { SketchCollector } from '../../sketchCollector';

export class MatelsoCollector extends SketchCollector {

    static CONFIG = {
        id: "matelso",
        name: "Matelso",
        description: "i18n.collectors.matelso.description",
        version: "0",
        website: "https://www.matelso.de/ControlPanel/login/index.php#invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47751.jpg",
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
        entryUrl: "https://www.matelso.de/ControlPanel/login/index.php#invoices",
    }

    constructor() {
        super(MatelsoCollector.CONFIG);
    }
}
