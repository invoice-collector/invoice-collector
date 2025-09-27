
import { SketchCollector } from '../../sketchCollector';

export class SanteeCooperMelCollector extends SketchCollector {

    static CONFIG = {
        id: "santee_cooper_mel",
        name: "Santee Cooper - MEL",
        description: "i18n.collectors.santee_cooper_mel.description",
        version: "0",
        website: "https://myservice.santeecooper.com/portal/BillDashboard.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4672891.jpg",
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
        entryUrl: "https://myservice.santeecooper.com/portal/BillDashboard.aspx",
    }

    constructor() {
        super(SanteeCooperMelCollector.CONFIG);
    }
}
