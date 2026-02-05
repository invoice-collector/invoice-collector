
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnapfishCollector extends SketchCollector {

    static CONFIG = {
        id: "snapfish",
        name: "SnapFish",
        description: "i18n.collectors.snapfish.description",
        version: "0",
        website: "https://www.snapfish.fr/2/loginto?next=https%3A%2F%2Fwww.snapfish.fr%2F2%2Fhome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123511.jpg",
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
        loginUrl: "https://www.snapfish.fr/2/loginto?next=https%3A%2F%2Fwww.snapfish.fr%2F2%2Fhome",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SnapfishCollector.CONFIG);
    }
}
