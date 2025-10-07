
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VikingDirectCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "viking_direct_co_uk",
        name: "viking-direct.co.uk",
        description: "i18n.collectors.viking_direct_co_uk.description",
        version: "0",
        website: "https://www.viking-direct.co.uk/account/loginAccountDisplay.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67575.jpg",
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
        entryUrl: "https://www.viking-direct.co.uk/account/loginAccountDisplay.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VikingDirectCoUkCollector.CONFIG);
    }
}
