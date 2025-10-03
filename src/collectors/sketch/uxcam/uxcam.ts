
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UxcamCollector extends SketchCollector {

    static CONFIG = {
        id: "uxcam",
        name: "UXCam",
        description: "i18n.collectors.uxcam.description",
        version: "0",
        website: "https://dashboard.uxcam.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7538.jpg",
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
        entryUrl: "https://dashboard.uxcam.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UxcamCollector.CONFIG);
    }
}
