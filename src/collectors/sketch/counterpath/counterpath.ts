
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CounterpathCollector extends SketchCollector {

    static CONFIG = {
        id: "counterpath",
        name: "Counterpath",
        description: "i18n.collectors.counterpath.description",
        version: "0",
        website: "https://secure.counterpath.com/Store/CounterPath/Members/Account/OrderHistory.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122120.jpg",
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
        entryUrl: "https://secure.counterpath.com/Store/CounterPath/Members/Account/OrderHistory.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CounterpathCollector.CONFIG);
    }
}
