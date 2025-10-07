
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DialpadCollector extends SketchCollector {

    static CONFIG = {
        id: "dialpad",
        name: "DialPad",
        description: "i18n.collectors.dialpad.description",
        version: "0",
        website: "https://dialpad.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161949.jpg",
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
        entryUrl: "https://dialpad.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DialpadCollector.CONFIG);
    }
}
