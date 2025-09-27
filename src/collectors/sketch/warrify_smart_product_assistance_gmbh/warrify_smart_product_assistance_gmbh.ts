
import { SketchCollector } from '../../sketchCollector';

export class WarrifySmartProductAssistanceGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "warrify_smart_product_assistance_gmbh",
        name: "warrify smart product assistance gmbh",
        description: "i18n.collectors.warrify_smart_product_assistance_gmbh.description",
        version: "0",
        website: "warrify.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1202361.jpg",
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
        entryUrl: "warrify.com",
    }

    constructor() {
        super(WarrifySmartProductAssistanceGmbhCollector.CONFIG);
    }
}
