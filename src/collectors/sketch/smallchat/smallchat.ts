
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmallchatCollector extends SketchCollector {

    static CONFIG = {
        id: "smallchat",
        name: "SmallChat",
        description: "i18n.collectors.smallchat.description",
        version: "0",
        website: "https://my.small.chat/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/241758.jpg",
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
        entryUrl: "https://my.small.chat/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmallchatCollector.CONFIG);
    }
}
