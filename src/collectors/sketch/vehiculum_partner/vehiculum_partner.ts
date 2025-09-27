
import { SketchCollector } from '../../sketchCollector';

export class VehiculumPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "vehiculum_partner",
        name: "Vehiculum Partner",
        description: "i18n.collectors.vehiculum_partner.description",
        version: "0",
        website: "https://partner.vehiculum.de/auszahlungen.cgi",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/773294.jpg",
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
        entryUrl: "https://partner.vehiculum.de/auszahlungen.cgi",
    }

    constructor() {
        super(VehiculumPartnerCollector.CONFIG);
    }
}
