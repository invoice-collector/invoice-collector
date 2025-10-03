
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PrestashopCollector extends SketchCollector {

    static CONFIG = {
        id: "prestashop",
        name: "PrestaShop",
        description: "i18n.collectors.prestashop.description",
        version: "0",
        website: "https://addons.prestashop.com/en/order-history?pab=1&",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26980.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://addons.prestashop.com/en/order-history?pab=1&",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrestashopCollector.CONFIG);
    }
}
