
import { SketchCollector } from '../../sketchCollector';

export class TimeosCollector extends SketchCollector {

    static CONFIG = {
        id: "timeos",
        name: "timeOS",
        description: "i18n.collectors.timeos.description",
        version: "0",
        website: "https://app.magicalhq.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4513792.jpg",
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
        entryUrl: "https://app.magicalhq.com/login",
    }

    constructor() {
        super(TimeosCollector.CONFIG);
    }
}
