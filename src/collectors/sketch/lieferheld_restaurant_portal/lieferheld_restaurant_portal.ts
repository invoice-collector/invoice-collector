
import { SketchCollector } from '../../sketchCollector';

export class LieferheldRestaurantPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "lieferheld_restaurant_portal",
        name: "Lieferheld - Restaurant Portal",
        description: "i18n.collectors.lieferheld_restaurant_portal.description",
        version: "0",
        website: "https://restaurant.lieferheld.de/#/portal/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72113.jpg",
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
        entryUrl: "https://restaurant.lieferheld.de/#/portal/invoices",
    }

    constructor() {
        super(LieferheldRestaurantPortalCollector.CONFIG);
    }
}
