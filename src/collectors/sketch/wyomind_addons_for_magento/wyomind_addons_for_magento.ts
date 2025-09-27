
import { SketchCollector } from '../../sketchCollector';

export class WyomindAddonsForMagentoCollector extends SketchCollector {

    static CONFIG = {
        id: "wyomind_addons_for_magento",
        name: "Wyomind Addons for Magento",
        description: "i18n.collectors.wyomind_addons_for_magento.description",
        version: "0",
        website: "https://www.wyomind.com/customer/invoice/index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94987.jpg",
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
        entryUrl: "https://www.wyomind.com/customer/invoice/index",
    }

    constructor() {
        super(WyomindAddonsForMagentoCollector.CONFIG);
    }
}
