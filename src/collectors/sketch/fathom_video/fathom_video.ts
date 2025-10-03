
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FathomVideoCollector extends SketchCollector {

    static CONFIG = {
        id: "fathom_video",
        name: "fathom.video",
        description: "i18n.collectors.fathom_video.description",
        version: "0",
        website: "https://fathom.video/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3206954.jpg",
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
        entryUrl: "https://fathom.video/users/sign_in",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FathomVideoCollector.CONFIG);
    }
}
