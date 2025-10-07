
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ForeverLivingProductsCollector extends SketchCollector {

    static CONFIG = {
        id: "forever_living_products",
        name: "Forever Living Products",
        description: "i18n.collectors.forever_living_products.description",
        version: "0",
        website: "https://fbosite.foreverliving.com/distribNew/MyReports.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75997.jpg",
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
        entryUrl: "https://fbosite.foreverliving.com/distribNew/MyReports.do",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ForeverLivingProductsCollector.CONFIG);
    }
}
