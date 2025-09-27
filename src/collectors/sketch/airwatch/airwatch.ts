
import { SketchCollector } from '../../sketchCollector';

export class AirwatchCollector extends SketchCollector {

    static CONFIG = {
        id: "airwatch",
        name: "AirWatch",
        description: "i18n.collectors.airwatch.description",
        version: "0",
        website: "http://www.air-watch.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8519.jpg",
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
        entryUrl: "http://www.air-watch.com",
    }

    constructor() {
        super(AirwatchCollector.CONFIG);
    }
}
