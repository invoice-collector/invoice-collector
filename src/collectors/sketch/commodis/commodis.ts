
import { SketchCollector } from '../../sketchCollector';

export class CommodisCollector extends SketchCollector {

    static CONFIG = {
        id: "commodis",
        name: "Commodis",
        description: "i18n.collectors.commodis.description",
        version: "0",
        website: "https://aflexio.commodis.de/de.commodis.ui.employer/secure/staff/booking-history.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4415207.jpg",
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
        entryUrl: "https://aflexio.commodis.de/de.commodis.ui.employer/secure/staff/booking-history.xhtml",
    }

    constructor() {
        super(CommodisCollector.CONFIG);
    }
}
