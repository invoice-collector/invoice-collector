
import { SketchCollector } from '../../sketchCollector';

export class VrBankLahnDillEgCollector extends SketchCollector {

    static CONFIG = {
        id: "vr_bank_lahn_dill_eg",
        name: "VR Bank Lahn-Dill eG",
        description: "i18n.collectors.vr_bank_lahn_dill_eg.description",
        version: "0",
        website: "https://www.vrbank-lahndill.de/services_cloud/portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3116889.jpg",
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
        entryUrl: "https://www.vrbank-lahndill.de/services_cloud/portal",
    }

    constructor() {
        super(VrBankLahnDillEgCollector.CONFIG);
    }
}
