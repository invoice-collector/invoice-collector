
import { SketchCollector } from '../../sketchCollector';

export class ParfumdreamsCollector extends SketchCollector {

    static CONFIG = {
        id: "parfumdreams",
        name: "parfumdreams",
        description: "i18n.collectors.parfumdreams.description",
        version: "0",
        website: "https://www.parfumdreams.de/User/Orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30032.jpg",
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
        entryUrl: "https://www.parfumdreams.de/User/Orders/",
    }

    constructor() {
        super(ParfumdreamsCollector.CONFIG);
    }
}
