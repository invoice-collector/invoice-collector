
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoinbaseCollector extends SketchCollector {

    static CONFIG = {
        id: "coinbase",
        name: "coinbase",
        description: "i18n.collectors.coinbase.description",
        version: "0",
        website: "https://www.coinbase.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46746.jpg",
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
        entryUrl: "https://www.coinbase.com/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoinbaseCollector.CONFIG);
    }
}
