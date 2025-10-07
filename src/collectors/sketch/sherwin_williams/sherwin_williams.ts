
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SherwinWilliamsCollector extends SketchCollector {

    static CONFIG = {
        id: "sherwin_williams",
        name: "Sherwin Williams",
        description: "i18n.collectors.sherwin_williams.description",
        version: "0",
        website: "https://www.sherwin-williams.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23339.jpg",
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
        entryUrl: "https://www.sherwin-williams.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SherwinWilliamsCollector.CONFIG);
    }
}
