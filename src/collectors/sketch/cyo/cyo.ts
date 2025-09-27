
import { SketchCollector } from '../../sketchCollector';

export class CyoCollector extends SketchCollector {

    static CONFIG = {
        id: "cyo",
        name: "Cyo",
        description: "i18n.collectors.cyo.description",
        version: "0",
        website: "https://www.cyodirect.fr/default-connected.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4203495.jpg",
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
        entryUrl: "https://www.cyodirect.fr/default-connected.aspx",
    }

    constructor() {
        super(CyoCollector.CONFIG);
    }
}
