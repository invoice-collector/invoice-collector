
import { SketchCollector } from '../../sketchCollector';

export class GetyourguidePartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "getyourguide_partner",
        name: "Getyourguide Partner",
        description: "i18n.collectors.getyourguide_partner.description",
        version: "0",
        website: "https://partner.getyourguide.com/de-de/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778145.jpg",
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
        entryUrl: "https://partner.getyourguide.com/de-de/payments",
    }

    constructor() {
        super(GetyourguidePartnerCollector.CONFIG);
    }
}
