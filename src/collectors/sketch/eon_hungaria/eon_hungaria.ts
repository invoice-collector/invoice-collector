
import { SketchCollector } from '../../sketchCollector';

export class EonHungariaCollector extends SketchCollector {

    static CONFIG = {
        id: "eon_hungaria",
        name: "EON Hungaria",
        description: "i18n.collectors.eon_hungaria.description",
        version: "0",
        website: "https://e-portal.eon-hungaria.com/ugyintezes/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492131.jpg",
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
        entryUrl: "https://e-portal.eon-hungaria.com/ugyintezes/billing",
    }

    constructor() {
        super(EonHungariaCollector.CONFIG);
    }
}
