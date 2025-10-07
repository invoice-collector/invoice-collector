
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TMobileDeCollector extends SketchCollector {

    static CONFIG = {
        id: "t_mobile_de",
        name: "T-Mobile.de",
        description: "i18n.collectors.t_mobile_de.description",
        version: "0",
        website: "https://www.telekom.de/kundencenter/rechnungsuebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/305.jpg",
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
        entryUrl: "https://www.telekom.de/kundencenter/rechnungsuebersicht",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TMobileDeCollector.CONFIG);
    }
}
