
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Tyre24Collector extends SketchCollector {

    static CONFIG = {
        id: "tyre24",
        name: "Tyre24",
        description: "i18n.collectors.tyre24.description",
        version: "0",
        website: "https://www.tyre24.com/de/de/user/login/page/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19520.jpg",
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
        entryUrl: "https://www.tyre24.com/de/de/user/login/page/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Tyre24Collector.CONFIG);
    }
}
