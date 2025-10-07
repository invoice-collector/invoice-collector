
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NationalInkassoCollector extends SketchCollector {

    static CONFIG = {
        id: "national_inkasso",
        name: "National Inkasso",
        description: "i18n.collectors.national_inkasso.description",
        version: "0",
        website: "https://test.national-inkasso.de/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920161.jpg",
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
        entryUrl: "https://test.national-inkasso.de/Account/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NationalInkassoCollector.CONFIG);
    }
}
