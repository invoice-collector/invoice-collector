
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EbertlangCollector extends SketchCollector {

    static CONFIG = {
        id: "ebertlang",
        name: "EBERTLANG",
        description: "i18n.collectors.ebertlang.description",
        version: "0",
        website: "https://partnerportal.elovade.com/start.cfm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29160.jpg",
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
        entryUrl: "https://partnerportal.elovade.com/start.cfm",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EbertlangCollector.CONFIG);
    }
}
