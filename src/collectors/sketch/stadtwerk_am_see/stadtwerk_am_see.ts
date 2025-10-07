
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkAmSeeCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerk_am_see",
        name: "Stadtwerk am See",
        description: "i18n.collectors.stadtwerk_am_see.description",
        version: "0",
        website: "https://portal.stadtwerk-am-see.de/mailbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863177.jpg",
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
        entryUrl: "https://portal.stadtwerk-am-see.de/mailbox",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkAmSeeCollector.CONFIG);
    }
}
