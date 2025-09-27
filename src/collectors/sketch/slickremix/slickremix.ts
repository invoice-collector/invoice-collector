
import { SketchCollector } from '../../sketchCollector';

export class SlickremixCollector extends SketchCollector {

    static CONFIG = {
        id: "slickremix",
        name: "SlickRemix",
        description: "i18n.collectors.slickremix.description",
        version: "0",
        website: "https://www.slickremix.com/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860255.jpg",
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
        entryUrl: "https://www.slickremix.com/my-account/",
    }

    constructor() {
        super(SlickremixCollector.CONFIG);
    }
}
