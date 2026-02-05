
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DataforseoCollector extends SketchCollector {

    static CONFIG = {
        id: "dataforseo",
        name: "DataforSEO",
        description: "i18n.collectors.dataforseo.description",
        version: "0",
        website: "https://app.dataforseo.com/users/getrows",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1968090.jpg",
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
        loginUrl: "https://app.dataforseo.com/users/getrows",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DataforseoCollector.CONFIG);
    }
}
