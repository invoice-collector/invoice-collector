
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Connect365Collector extends SketchCollector {

    static CONFIG = {
        id: "connect365",
        name: "connect365",
        description: "i18n.collectors.connect365.description",
        version: "0",
        website: "http://app.connect365.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/532723.jpg",
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
        entryUrl: "http://app.connect365.io",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Connect365Collector.CONFIG);
    }
}
