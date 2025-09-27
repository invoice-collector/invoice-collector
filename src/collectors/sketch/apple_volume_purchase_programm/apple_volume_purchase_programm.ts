
import { SketchCollector } from '../../sketchCollector';

export class AppleVolumePurchaseProgrammCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_volume_purchase_programm",
        name: "Apple Volume Purchase Programm",
        description: "i18n.collectors.apple_volume_purchase_programm.description",
        version: "0",
        website: "https://vpp.itunes.apple.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170975.jpg",
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
        entryUrl: "https://vpp.itunes.apple.com",
    }

    constructor() {
        super(AppleVolumePurchaseProgrammCollector.CONFIG);
    }
}
