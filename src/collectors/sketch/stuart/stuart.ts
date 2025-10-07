
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StuartCollector extends SketchCollector {

    static CONFIG = {
        id: "stuart",
        name: "Stuart",
        description: "i18n.collectors.stuart.description",
        version: "0",
        website: "https://dashboard.stuart.com/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/662544.jpg",
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
        entryUrl: "https://dashboard.stuart.com/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StuartCollector.CONFIG);
    }
}
