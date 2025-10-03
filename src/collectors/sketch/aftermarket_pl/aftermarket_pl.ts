
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AftermarketPlCollector extends SketchCollector {

    static CONFIG = {
        id: "aftermarket_pl",
        name: "Aftermarket pl",
        description: "i18n.collectors.aftermarket_pl.description",
        version: "0",
        website: "https://www.aftermarket.pl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172789.jpg",
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
        entryUrl: "https://www.aftermarket.pl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AftermarketPlCollector.CONFIG);
    }
}
