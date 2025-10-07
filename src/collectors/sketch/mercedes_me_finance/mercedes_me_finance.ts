
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MercedesMeFinanceCollector extends SketchCollector {

    static CONFIG = {
        id: "mercedes_me_finance",
        name: "Mercedes me Finance",
        description: "i18n.collectors.mercedes_me_finance.description",
        version: "0",
        website: "https://customerportal.mercedes-benz.com/cp-de/portal/documentArchive.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2718322.jpg",
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
        entryUrl: "https://customerportal.mercedes-benz.com/cp-de/portal/documentArchive.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MercedesMeFinanceCollector.CONFIG);
    }
}
