
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VideoblocksCollector extends SketchCollector {

    static CONFIG = {
        id: "videoblocks",
        name: "Videoblocks",
        description: "i18n.collectors.videoblocks.description",
        version: "0",
        website: "https://www.videoblocks.com/member/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/157975.jpg",
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
        entryUrl: "https://www.videoblocks.com/member/profile",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VideoblocksCollector.CONFIG);
    }
}
