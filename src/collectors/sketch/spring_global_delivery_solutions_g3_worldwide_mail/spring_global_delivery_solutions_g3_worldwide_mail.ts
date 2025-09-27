
import { SketchCollector } from '../../sketchCollector';

export class SpringGlobalDeliverySolutionsG3WorldwideMailCollector extends SketchCollector {

    static CONFIG = {
        id: "spring_global_delivery_solutions_g3_worldwide_mail",
        name: "Spring Global Delivery Solutions - G3 Worldwide Mail",
        description: "i18n.collectors.spring_global_delivery_solutions_g3_worldwide_mail.description",
        version: "0",
        website: "http://www.spring-gds.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22753.jpg",
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
        entryUrl: "http://www.spring-gds.com",
    }

    constructor() {
        super(SpringGlobalDeliverySolutionsG3WorldwideMailCollector.CONFIG);
    }
}
