
import { SketchCollector } from '../../sketchCollector';

export class DayusePartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "dayuse_partners",
        name: "DAYUSE - Partners",
        description: "i18n.collectors.dayuse_partners.description",
        version: "0",
        website: "https://partners.dayuse.io/beta/invoicing/item/list/10989",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4510345.jpg",
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
        entryUrl: "https://partners.dayuse.io/beta/invoicing/item/list/10989",
    }

    constructor() {
        super(DayusePartnersCollector.CONFIG);
    }
}
