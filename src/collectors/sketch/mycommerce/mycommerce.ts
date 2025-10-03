
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MycommerceCollector extends SketchCollector {

    static CONFIG = {
        id: "mycommerce",
        name: "MyCommerce",
        description: "i18n.collectors.mycommerce.description",
        version: "0",
        website: "https://account.mycommerce.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65713.jpg",
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
        entryUrl: "https://account.mycommerce.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MycommerceCollector.CONFIG);
    }
}
