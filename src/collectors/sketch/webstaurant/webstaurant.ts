
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WebstaurantCollector extends SketchCollector {

    static CONFIG = {
        id: "webstaurant",
        name: "Webstaurant",
        description: "i18n.collectors.webstaurant.description",
        version: "0",
        website: "https://www.webstaurantstore.com/myaccount/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/399631.jpg",
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
        loginUrl: "https://www.webstaurantstore.com/myaccount/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WebstaurantCollector.CONFIG);
    }
}
