
import { SketchCollector } from '../../sketchCollector';

export class AirIncCollector extends SketchCollector {

    static CONFIG = {
        id: "air_inc",
        name: "Air.inc",
        description: "i18n.collectors.air_inc.description",
        version: "0",
        website: "https://app.air.inc/workspace/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1361897.jpg",
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
        entryUrl: "https://app.air.inc/workspace/subscription",
    }

    constructor() {
        super(AirIncCollector.CONFIG);
    }
}
