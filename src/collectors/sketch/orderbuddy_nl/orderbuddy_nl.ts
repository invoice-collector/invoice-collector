
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OrderbuddyNlCollector extends SketchCollector {

    static CONFIG = {
        id: "orderbuddy_nl",
        name: "OrderBuddy.nl",
        description: "i18n.collectors.orderbuddy_nl.description",
        version: "0",
        website: "http://www.orderbuddy.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32568.jpg",
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
        entryUrl: "http://www.orderbuddy.nl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OrderbuddyNlCollector.CONFIG);
    }
}
