
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WinsimCollector extends SketchCollector {

    static CONFIG = {
        id: "winsim",
        name: "winSIM",
        description: "i18n.collectors.winsim.description",
        version: "0",
        website: "https://service.winsim.de/mytariff/invoice/showAll",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9199.jpg",
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
        entryUrl: "https://service.winsim.de/mytariff/invoice/showAll",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WinsimCollector.CONFIG);
    }
}
