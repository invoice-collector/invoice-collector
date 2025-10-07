
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BigcommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "bigcommerce",
        name: "BigCommerce",
        description: "i18n.collectors.bigcommerce.description",
        version: "0",
        website: "https://login.bigcommerce.com/login?_ga=2.230316319.2079475974.1523600767-1463894689.1523600767",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8947.jpg",
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
        entryUrl: "https://login.bigcommerce.com/login?_ga=2.230316319.2079475974.1523600767-1463894689.1523600767",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BigcommerceCollector.CONFIG);
    }
}
