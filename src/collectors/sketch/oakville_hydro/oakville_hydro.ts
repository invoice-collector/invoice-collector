
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OakvilleHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "oakville_hydro",
        name: "Oakville Hydro",
        description: "i18n.collectors.oakville_hydro.description",
        version: "0",
        website: "https://www.oakvillehydro.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8867.jpg",
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
        loginUrl: "https://www.oakvillehydro.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OakvilleHydroCollector.CONFIG);
    }
}
