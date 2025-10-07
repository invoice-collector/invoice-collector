
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IntersparCollector extends SketchCollector {

    static CONFIG = {
        id: "interspar",
        name: "Interspar",
        description: "i18n.collectors.interspar.description",
        version: "0",
        website: "https://www.interspar.at/shop/lebensmittel/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349953.jpg",
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
        entryUrl: "https://www.interspar.at/shop/lebensmittel/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntersparCollector.CONFIG);
    }
}
