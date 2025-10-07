
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IcewarpCollector extends SketchCollector {

    static CONFIG = {
        id: "icewarp",
        name: "IceWarp",
        description: "i18n.collectors.icewarp.description",
        version: "0",
        website: "https://login.icewarp.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/834101.jpg",
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
        entryUrl: "https://login.icewarp.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IcewarpCollector.CONFIG);
    }
}
