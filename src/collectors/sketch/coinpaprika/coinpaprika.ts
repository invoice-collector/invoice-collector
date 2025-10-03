
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoinpaprikaCollector extends SketchCollector {

    static CONFIG = {
        id: "coinpaprika",
        name: "Coinpaprika",
        description: "i18n.collectors.coinpaprika.description",
        version: "0",
        website: "https://coinpaprika.com/api/pricing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4203483.jpg",
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
        entryUrl: "https://coinpaprika.com/api/pricing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoinpaprikaCollector.CONFIG);
    }
}
