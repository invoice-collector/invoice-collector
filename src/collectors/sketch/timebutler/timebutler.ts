
import { SketchCollector } from '../../sketchCollector';

export class TimebutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "timebutler",
        name: "timebutler",
        description: "i18n.collectors.timebutler.description",
        version: "0",
        website: "https://timebutler.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30557.jpg",
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
        entryUrl: "https://timebutler.de/login/",
    }

    constructor() {
        super(TimebutlerCollector.CONFIG);
    }
}
