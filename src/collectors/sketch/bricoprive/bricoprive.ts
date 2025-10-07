
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BricopriveCollector extends SketchCollector {

    static CONFIG = {
        id: "bricoprive",
        name: "Bricoprive",
        description: "i18n.collectors.bricoprive.description",
        version: "0",
        website: "https://www.bricoprive.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648505.jpg",
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
        entryUrl: "https://www.bricoprive.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BricopriveCollector.CONFIG);
    }
}
