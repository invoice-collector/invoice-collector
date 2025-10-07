
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Order2cashComCollector extends SketchCollector {

    static CONFIG = {
        id: "order2cash_com",
        name: "order2cash.com",
        description: "i18n.collectors.order2cash_com.description",
        version: "0",
        website: "https://secure.order2cash.com/i2d/#XD3sCs1EKZFx44kyf7RSSQ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32247.jpg",
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
        entryUrl: "https://secure.order2cash.com/i2d/#XD3sCs1EKZFx44kyf7RSSQ",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Order2cashComCollector.CONFIG);
    }
}
