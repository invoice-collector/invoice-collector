
import { SketchCollector } from '../../sketchCollector';

export class MachtfitCollector extends SketchCollector {

    static CONFIG = {
        id: "machtfit",
        name: "MACHTfit",
        description: "i18n.collectors.machtfit.description",
        version: "0",
        website: "https://machtfit.machtfit.de/accounts/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64784.jpg",
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
        entryUrl: "https://machtfit.machtfit.de/accounts/login",
    }

    constructor() {
        super(MachtfitCollector.CONFIG);
    }
}
