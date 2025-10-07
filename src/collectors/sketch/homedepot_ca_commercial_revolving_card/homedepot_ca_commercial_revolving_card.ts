
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HomedepotCaCommercialRevolvingCardCollector extends SketchCollector {

    static CONFIG = {
        id: "homedepot_ca_commercial_revolving_card",
        name: "HomeDepot.ca - Commercial Revolving Card",
        description: "i18n.collectors.homedepot_ca_commercial_revolving_card.description",
        version: "0",
        website: "https://citiretailservices.citibankonline.com/RSnextgen/svc/launch/index.action?siteId=PLCN_HOMEDEPOT",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/434663.jpg",
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
        entryUrl: "https://citiretailservices.citibankonline.com/RSnextgen/svc/launch/index.action?siteId=PLCN_HOMEDEPOT",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HomedepotCaCommercialRevolvingCardCollector.CONFIG);
    }
}
