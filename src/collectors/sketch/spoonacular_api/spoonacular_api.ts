
import { SketchCollector } from '../../sketchCollector';

export class SpoonacularApiCollector extends SketchCollector {

    static CONFIG = {
        id: "spoonacular_api",
        name: "Spoonacular API",
        description: "i18n.collectors.spoonacular_api.description",
        version: "0",
        website: "https://spoonacular.com/food-api/console#Plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1333281.jpg",
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
        entryUrl: "https://spoonacular.com/food-api/console#Plan",
    }

    constructor() {
        super(SpoonacularApiCollector.CONFIG);
    }
}
