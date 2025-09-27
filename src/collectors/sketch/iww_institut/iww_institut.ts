
import { SketchCollector } from '../../sketchCollector';

export class IwwInstitutCollector extends SketchCollector {

    static CONFIG = {
        id: "iww_institut",
        name: "IWW Institut",
        description: "i18n.collectors.iww_institut.description",
        version: "0",
        website: "https://www.iww.de/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/534525.jpg",
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
        entryUrl: "https://www.iww.de/anmelden",
    }

    constructor() {
        super(IwwInstitutCollector.CONFIG);
    }
}
