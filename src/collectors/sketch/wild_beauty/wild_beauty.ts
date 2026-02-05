
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WildBeautyCollector extends SketchCollector {

    static CONFIG = {
        id: "wild_beauty",
        name: "Wild Beauty",
        description: "i18n.collectors.wild_beauty.description",
        version: "0",
        website: "https://www.wild-beauty.de/kundenbereich/salon/383EA001-0011-1021-89-83-0000DC01010A",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1359610.jpg",
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
        loginUrl: "https://www.wild-beauty.de/kundenbereich/salon/383EA001-0011-1021-89-83-0000DC01010A",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WildBeautyCollector.CONFIG);
    }
}
