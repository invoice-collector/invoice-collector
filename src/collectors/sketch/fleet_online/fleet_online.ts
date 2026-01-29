
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FleetOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "fleet_online",
        name: "Fleet Online",
        description: "i18n.collectors.fleet_online.description",
        version: "0",
        website: "https://fleetonline.vwfs.com/FleetOnline/postbox?startDate=2023-04-04&endDate=2023-07-03",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2017545.jpg",
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
        loginUrl: "https://fleetonline.vwfs.com/FleetOnline/postbox?startDate=2023-04-04&endDate=2023-07-03",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FleetOnlineCollector.CONFIG);
    }
}
