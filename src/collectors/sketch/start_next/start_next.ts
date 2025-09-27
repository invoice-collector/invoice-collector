
import { SketchCollector } from '../../sketchCollector';

export class StartNextCollector extends SketchCollector {

    static CONFIG = {
        id: "start_next",
        name: "START NEXT",
        description: "i18n.collectors.start_next.description",
        version: "0",
        website: "https://www.startnext.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931026.jpg",
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
        entryUrl: "https://www.startnext.com/",
    }

    constructor() {
        super(StartNextCollector.CONFIG);
    }
}
