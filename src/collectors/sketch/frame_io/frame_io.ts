
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FrameIoCollector extends SketchCollector {

    static CONFIG = {
        id: "frame_io",
        name: "Frame.io",
        description: "i18n.collectors.frame_io.description",
        version: "0",
        website: "https://app.frame.io/welcome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37095.jpg",
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
        entryUrl: "https://app.frame.io/welcome",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrameIoCollector.CONFIG);
    }
}
