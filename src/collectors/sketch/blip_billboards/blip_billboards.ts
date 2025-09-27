
import { SketchCollector } from '../../sketchCollector';

export class BlipBillboardsCollector extends SketchCollector {

    static CONFIG = {
        id: "blip_billboards",
        name: "Blip Billboards",
        description: "i18n.collectors.blip_billboards.description",
        version: "0",
        website: "https://marketplace.blipbillboards.com/reports",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449718.jpg",
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
        entryUrl: "https://marketplace.blipbillboards.com/reports",
    }

    constructor() {
        super(BlipBillboardsCollector.CONFIG);
    }
}
