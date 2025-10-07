
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HomedepotCaCollector extends SketchCollector {

    static CONFIG = {
        id: "homedepot_ca",
        name: "HomeDepot.ca",
        description: "i18n.collectors.homedepot_ca.description",
        version: "0",
        website: "https://www.retailservicescommercial.citi.com/USCRSF/CMLSVC/index.html?siteId=CANP_HOMEDEPOT",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24564.jpg",
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
        entryUrl: "https://www.retailservicescommercial.citi.com/USCRSF/CMLSVC/index.html?siteId=CANP_HOMEDEPOT",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HomedepotCaCollector.CONFIG);
    }
}
