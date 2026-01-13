
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NavanComCollector extends SketchCollector {

    static CONFIG = {
        id: "navan_com",
        name: "navan.com",
        description: "i18n.collectors.navan_com.description",
        version: "0",
        website: "https://app.navan.com/app/admin2/de/reports/overview?fromEpochSeconds=1672560000&toEpochSeconds=1691046182&timezone=America%2FLos_Angeles&selectedTimeframe=YTD&currency=EUR&selectedTravelDateTimeframe=null",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077750.jpg",
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
        loginUrl: "https://app.navan.com/app/admin2/de/reports/overview?fromEpochSeconds=1672560000&toEpochSeconds=1691046182&timezone=America%2FLos_Angeles&selectedTimeframe=YTD&currency=EUR&selectedTravelDateTimeframe=null",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NavanComCollector.CONFIG);
    }
}
