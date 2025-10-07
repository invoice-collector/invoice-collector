
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StaplesComCollector extends SketchCollector {

    static CONFIG = {
        id: "staples_com",
        name: "Staples.com",
        description: "i18n.collectors.staples_com.description",
        version: "0",
        website: "https://www.staples.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31291.jpg",
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
        entryUrl: "https://www.staples.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StaplesComCollector.CONFIG);
    }
}
