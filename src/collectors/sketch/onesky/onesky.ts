
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OneskyCollector extends SketchCollector {

    static CONFIG = {
        id: "onesky",
        name: "OneSky",
        description: "i18n.collectors.onesky.description",
        version: "0",
        website: "https://www.oneskyapp.com/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39698.jpg",
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
        entryUrl: "https://www.oneskyapp.com/sign-in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OneskyCollector.CONFIG);
    }
}
