
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LkqCorpKeystoneCollector extends SketchCollector {

    static CONFIG = {
        id: "lkq_corp_keystone",
        name: "LKQ Corp - Keystone",
        description: "i18n.collectors.lkq_corp_keystone.description",
        version: "0",
        website: "https://preview.orderkeystone.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4593499.jpg",
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
        entryUrl: "https://preview.orderkeystone.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LkqCorpKeystoneCollector.CONFIG);
    }
}
