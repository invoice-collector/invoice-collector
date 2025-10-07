
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoolworthsSaCollector extends SketchCollector {

    static CONFIG = {
        id: "woolworths_sa",
        name: "Woolworths SA",
        description: "i18n.collectors.woolworths_sa.description",
        version: "0",
        website: "https://www.woolworths.co.za/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/740291.jpg",
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
        entryUrl: "https://www.woolworths.co.za/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoolworthsSaCollector.CONFIG);
    }
}
