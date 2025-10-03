
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImdbProCollector extends SketchCollector {

    static CONFIG = {
        id: "imdb_pro",
        name: "imdb Pro",
        description: "i18n.collectors.imdb_pro.description",
        version: "0",
        website: "https://pro.imdb.com/account/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10489.jpg",
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
        entryUrl: "https://pro.imdb.com/account/receipts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImdbProCollector.CONFIG);
    }
}
