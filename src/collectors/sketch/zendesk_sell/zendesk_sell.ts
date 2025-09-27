
import { SketchCollector } from '../../sketchCollector';

export class ZendeskSellCollector extends SketchCollector {

    static CONFIG = {
        id: "zendesk_sell",
        name: "Zendesk Sell",
        description: "i18n.collectors.zendesk_sell.description",
        version: "0",
        website: "https://app.futuresimple.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/169048.jpg",
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
        entryUrl: "https://app.futuresimple.com/settings/billing",
    }

    constructor() {
        super(ZendeskSellCollector.CONFIG);
    }
}
