
import { SketchCollector } from '../../sketchCollector';

export class GrunweltGasCollector extends SketchCollector {

    static CONFIG = {
        id: "grunwelt_gas",
        name: "Grunwelt Gas",
        description: "i18n.collectors.grunwelt_gas.description",
        version: "0",
        website: "https://kundenportal.gas.de/qpo/portal/gruengas/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6104.jpg",
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
        entryUrl: "https://kundenportal.gas.de/qpo/portal/gruengas/login",
    }

    constructor() {
        super(GrunweltGasCollector.CONFIG);
    }
}
