
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LbnCollector extends SketchCollector {

    static CONFIG = {
        id: "lbn",
        name: "lbn",
        description: "i18n.collectors.lbn.description",
        version: "0",
        website: "https://vermittler.lbn.de/vermittlerportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1985664.jpg",
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
        entryUrl: "https://vermittler.lbn.de/vermittlerportal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LbnCollector.CONFIG);
    }
}
