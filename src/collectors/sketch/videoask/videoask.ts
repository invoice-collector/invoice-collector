
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VideoaskCollector extends SketchCollector {

    static CONFIG = {
        id: "videoask",
        name: "VideoAsk",
        description: "i18n.collectors.videoask.description",
        version: "0",
        website: "https://app.videoask.com/app/account?tab=plan_and_billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/504671.jpg",
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
        entryUrl: "https://app.videoask.com/app/account?tab=plan_and_billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VideoaskCollector.CONFIG);
    }
}
