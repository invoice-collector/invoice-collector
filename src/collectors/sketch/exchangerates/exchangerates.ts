
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ExchangeratesCollector extends SketchCollector {

    static CONFIG = {
        id: "exchangerates",
        name: "exchangerates",
        description: "i18n.collectors.exchangerates.description",
        version: "0",
        website: "https://manage.exchangeratesapi.io/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863023.jpg",
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
        entryUrl: "https://manage.exchangeratesapi.io/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ExchangeratesCollector.CONFIG);
    }
}
