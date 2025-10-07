
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RepliconCollector extends SketchCollector {

    static CONFIG = {
        id: "replicon",
        name: "Replicon",
        description: "i18n.collectors.replicon.description",
        version: "0",
        website: "https://login.replicon.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6464.jpg",
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
        entryUrl: "https://login.replicon.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RepliconCollector.CONFIG);
    }
}
