
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DolibarrCollector extends SketchCollector {

    static CONFIG = {
        id: "dolibarr",
        name: "Dolibarr",
        description: "i18n.collectors.dolibarr.description",
        version: "0",
        website: "https://www.dolibarr.org",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2010881.jpg",
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
        entryUrl: "https://www.dolibarr.org",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DolibarrCollector.CONFIG);
    }
}
