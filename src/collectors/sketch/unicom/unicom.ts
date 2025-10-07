
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnicomCollector extends SketchCollector {

    static CONFIG = {
        id: "unicom",
        name: "Unicom",
        description: "i18n.collectors.unicom.description",
        version: "0",
        website: "https://switchingon.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/742551.jpg",
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
        entryUrl: "https://switchingon.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnicomCollector.CONFIG);
    }
}
