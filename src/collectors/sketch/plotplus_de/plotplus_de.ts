
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlotplusDeCollector extends SketchCollector {

    static CONFIG = {
        id: "plotplus_de",
        name: "plotplus.de",
        description: "i18n.collectors.plotplus_de.description",
        version: "0",
        website: "https://www.plotplus.de/mein-konto/user/invoice/your-invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2131487.jpg",
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
        entryUrl: "https://www.plotplus.de/mein-konto/user/invoice/your-invoice/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlotplusDeCollector.CONFIG);
    }
}
