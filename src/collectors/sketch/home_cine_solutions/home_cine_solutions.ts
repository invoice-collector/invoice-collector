
import { SketchCollector } from '../../sketchCollector';

export class HomeCineSolutionsCollector extends SketchCollector {

    static CONFIG = {
        id: "home_cine_solutions",
        name: "Home Cine Solutions",
        description: "i18n.collectors.home_cine_solutions.description",
        version: "0",
        website: "https://www.homecinesolutions.fr/customer_session/new?return_to=%2Fcustomer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120454.jpg",
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
        entryUrl: "https://www.homecinesolutions.fr/customer_session/new?return_to=%2Fcustomer",
    }

    constructor() {
        super(HomeCineSolutionsCollector.CONFIG);
    }
}
