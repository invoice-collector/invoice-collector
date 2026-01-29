
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RunwayCollector extends SketchCollector {

    static CONFIG = {
        id: "runway",
        name: "Runway",
        description: "i18n.collectors.runway.description",
        version: "0",
        website: "https://app.runwayml.com/teams/pgutburth/settings?tab=billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2166377.jpg",
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
        loginUrl: "https://app.runwayml.com/teams/pgutburth/settings?tab=billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RunwayCollector.CONFIG);
    }
}
