
import { SketchCollector } from '../../sketchCollector';

export class GordonFoodServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "gordon_food_service",
        name: "Gordon Food service",
        description: "i18n.collectors.gordon_food_service.description",
        version: "0",
        website: "https://sso.gfs.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/749695.jpg",
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
        entryUrl: "https://sso.gfs.com/",
    }

    constructor() {
        super(GordonFoodServiceCollector.CONFIG);
    }
}
