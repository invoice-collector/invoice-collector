
import { SketchCollector } from '../../sketchCollector';

export class CaliforniaWaterServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "california_water_service",
        name: "California Water Service",
        description: "i18n.collectors.california_water_service.description",
        version: "0",
        website: "https://myaccount.calwater.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/69465.jpg",
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
        entryUrl: "https://myaccount.calwater.com/",
    }

    constructor() {
        super(CaliforniaWaterServiceCollector.CONFIG);
    }
}
