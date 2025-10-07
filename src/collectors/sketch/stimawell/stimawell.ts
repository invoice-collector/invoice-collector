
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StimawellCollector extends SketchCollector {

    static CONFIG = {
        id: "stimawell",
        name: "Stimawell",
        description: "i18n.collectors.stimawell.description",
        version: "0",
        website: "https://shop.schwa-medico.de/de/invoice/94613/download?check_logged_in=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2017534.jpg",
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
        entryUrl: "https://shop.schwa-medico.de/de/invoice/94613/download?check_logged_in=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StimawellCollector.CONFIG);
    }
}
