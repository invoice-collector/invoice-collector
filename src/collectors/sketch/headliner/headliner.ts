
import { SketchCollector } from '../../sketchCollector';

export class HeadlinerCollector extends SketchCollector {

    static CONFIG = {
        id: "headliner",
        name: "HEADLINER",
        description: "i18n.collectors.headliner.description",
        version: "0",
        website: "https://www.headliner.app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038744.jpg",
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
        entryUrl: "https://www.headliner.app/",
    }

    constructor() {
        super(HeadlinerCollector.CONFIG);
    }
}
