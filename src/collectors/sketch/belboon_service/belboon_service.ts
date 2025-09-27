
import { SketchCollector } from '../../sketchCollector';

export class BelboonServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "belboon_service",
        name: "belboon(Service)",
        description: "i18n.collectors.belboon_service.description",
        version: "0",
        website: "https://ui.service.belboon.com/app/index.html#/finance/billing/advertiser",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396880.jpg",
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
        entryUrl: "https://ui.service.belboon.com/app/index.html#/finance/billing/advertiser",
    }

    constructor() {
        super(BelboonServiceCollector.CONFIG);
    }
}
