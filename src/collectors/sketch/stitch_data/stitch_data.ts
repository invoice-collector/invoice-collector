
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StitchDataCollector extends SketchCollector {

    static CONFIG = {
        id: "stitch_data",
        name: "Stitch Data",
        description: "i18n.collectors.stitch_data.description",
        version: "0",
        website: "https://app.stitchdata.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76537.jpg",
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
        loginUrl: "https://app.stitchdata.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StitchDataCollector.CONFIG);
    }
}
