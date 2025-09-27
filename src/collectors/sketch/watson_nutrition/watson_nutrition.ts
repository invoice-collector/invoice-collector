
import { SketchCollector } from '../../sketchCollector';

export class WatsonNutritionCollector extends SketchCollector {

    static CONFIG = {
        id: "watson_nutrition",
        name: "Watson Nutrition",
        description: "i18n.collectors.watson_nutrition.description",
        version: "0",
        website: "https://watsonnutrition.de/mein-konto/view-order/55313/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645398.jpg",
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
        entryUrl: "https://watsonnutrition.de/mein-konto/view-order/55313/",
    }

    constructor() {
        super(WatsonNutritionCollector.CONFIG);
    }
}
