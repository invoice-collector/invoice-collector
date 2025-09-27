
import { SketchCollector } from '../../sketchCollector';

export class SwbAgCollector extends SketchCollector {

    static CONFIG = {
        id: "swb_ag",
        name: "swb AG",
        description: "i18n.collectors.swb_ag.description",
        version: "0",
        website: "http://www.swb-gruppe.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14228.jpg",
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
        entryUrl: "http://www.swb-gruppe.de",
    }

    constructor() {
        super(SwbAgCollector.CONFIG);
    }
}
