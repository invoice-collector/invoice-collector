
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeipzigerWasserwerkeCollector extends SketchCollector {

    static CONFIG = {
        id: "leipziger_wasserwerke",
        name: "Leipziger Wasserwerke",
        description: "i18n.collectors.leipziger_wasserwerke.description",
        version: "0",
        website: "https://kupowasser.l.de/#/Logon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4367664.jpg",
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
        entryUrl: "https://kupowasser.l.de/#/Logon",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeipzigerWasserwerkeCollector.CONFIG);
    }
}
