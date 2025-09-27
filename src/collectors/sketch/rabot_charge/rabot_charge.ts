
import { SketchCollector } from '../../sketchCollector';

export class RabotChargeCollector extends SketchCollector {

    static CONFIG = {
        id: "rabot_charge",
        name: "Rabot Charge",
        description: "i18n.collectors.rabot_charge.description",
        version: "0",
        website: "https://kundenportal.rabot.energy/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3014647.jpg",
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
        entryUrl: "https://kundenportal.rabot.energy/login",
    }

    constructor() {
        super(RabotChargeCollector.CONFIG);
    }
}
