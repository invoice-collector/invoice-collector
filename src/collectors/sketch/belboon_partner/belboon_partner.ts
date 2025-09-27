
import { SketchCollector } from '../../sketchCollector';

export class BelboonPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "belboon_partner",
        name: "belboon(Partner)",
        description: "i18n.collectors.belboon_partner.description",
        version: "0",
        website: "https://partner.service.belboon.com/app/index.html#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/405605.jpg",
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
        entryUrl: "https://partner.service.belboon.com/app/index.html#/login",
    }

    constructor() {
        super(BelboonPartnerCollector.CONFIG);
    }
}
