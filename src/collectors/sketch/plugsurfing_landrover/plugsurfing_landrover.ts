
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PlugsurfingLandroverCollector extends SketchCollector {

    static CONFIG = {
        id: "plugsurfing_landrover",
        name: "PlugSurfing Landrover",
        description: "i18n.collectors.plugsurfing_landrover.description",
        version: "0",
        website: "https://landroverportal.plugsurfing.com/charging-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203012.jpg",
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
        loginUrl: "https://landroverportal.plugsurfing.com/charging-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PlugsurfingLandroverCollector.CONFIG);
    }
}
