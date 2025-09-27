
import { SketchCollector } from '../../sketchCollector';

export class WodupCollector extends SketchCollector {

    static CONFIG = {
        id: "wodup",
        name: "WodUp",
        description: "i18n.collectors.wodup.description",
        version: "0",
        website: "https://www.wodup.com/gyms/evope-gmbh/admin/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/641056.jpg",
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
        entryUrl: "https://www.wodup.com/gyms/evope-gmbh/admin/billing",
    }

    constructor() {
        super(WodupCollector.CONFIG);
    }
}
