
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FrametraxxCollector extends SketchCollector {

    static CONFIG = {
        id: "frametraxx",
        name: "frametraxx",
        description: "i18n.collectors.frametraxx.description",
        version: "0",
        website: "http://www.frametraxx.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14245.jpg",
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
        entryUrl: "http://www.frametraxx.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FrametraxxCollector.CONFIG);
    }
}
