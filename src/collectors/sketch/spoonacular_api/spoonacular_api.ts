
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpoonacularApiCollector extends SketchCollector {

    static CONFIG = {
        id: "spoonacular_api",
        name: "Spoonacular API",
        description: "i18n.collectors.spoonacular_api.description",
        version: "0",
        website: "https://spoonacular.com/food-api/console#Plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333281.jpg",
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
        loginUrl: "https://spoonacular.com/food-api/console#Plan",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SpoonacularApiCollector.CONFIG);
    }
}
