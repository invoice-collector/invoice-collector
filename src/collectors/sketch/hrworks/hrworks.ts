
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HrworksCollector extends SketchCollector {

    static CONFIG = {
        id: "hrworks",
        name: "HRworks",
        description: "i18n.collectors.hrworks.description",
        version: "0",
        website: "https://login.hrworks.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26583.jpg",
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
        entryUrl: "https://login.hrworks.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HrworksCollector.CONFIG);
    }
}
