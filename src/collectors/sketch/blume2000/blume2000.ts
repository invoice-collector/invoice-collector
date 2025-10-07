
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Blume2000Collector extends SketchCollector {

    static CONFIG = {
        id: "blume2000",
        name: "Blume2000",
        description: "i18n.collectors.blume2000.description",
        version: "0",
        website: "https://www.blume2000.de/index.php?cl=account&fnc=showOrders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14293.jpg",
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
        entryUrl: "https://www.blume2000.de/index.php?cl=account&fnc=showOrders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Blume2000Collector.CONFIG);
    }
}
