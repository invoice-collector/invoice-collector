
import { SketchCollector } from '../../sketchCollector';

export class BewSpeedCollector extends SketchCollector {

    static CONFIG = {
        id: "bew_speed",
        name: "BEW Speed",
        description: "i18n.collectors.bew_speed.description",
        version: "0",
        website: "https://kundenportal.bewspeed.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2250669.jpg",
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
        entryUrl: "https://kundenportal.bewspeed.de/",
    }

    constructor() {
        super(BewSpeedCollector.CONFIG);
    }
}
