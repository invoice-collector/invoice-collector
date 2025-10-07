
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AushaCollector extends SketchCollector {

    static CONFIG = {
        id: "ausha",
        name: "Ausha",
        description: "i18n.collectors.ausha.description",
        version: "0",
        website: "https://app.ausha.co/app/user/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/678204.jpg",
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
        entryUrl: "https://app.ausha.co/app/user/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AushaCollector.CONFIG);
    }
}
