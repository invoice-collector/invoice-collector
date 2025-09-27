
import { SketchCollector } from '../../sketchCollector';

export class DaDirektCollector extends SketchCollector {

    static CONFIG = {
        id: "da_direkt",
        name: "DA Direkt",
        description: "i18n.collectors.da_direkt.description",
        version: "0",
        website: "https://www.da-direkt.de/kundencenter/kundenkonto/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22420.jpg",
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
        entryUrl: "https://www.da-direkt.de/kundencenter/kundenkonto/login",
    }

    constructor() {
        super(DaDirektCollector.CONFIG);
    }
}
