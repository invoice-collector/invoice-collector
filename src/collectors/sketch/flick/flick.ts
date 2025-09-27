
import { SketchCollector } from '../../sketchCollector';

export class FlickCollector extends SketchCollector {

    static CONFIG = {
        id: "flick",
        name: "Flick",
        description: "i18n.collectors.flick.description",
        version: "0",
        website: "https://www.flick.tech/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510992.jpg",
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
        entryUrl: "https://www.flick.tech/",
    }

    constructor() {
        super(FlickCollector.CONFIG);
    }
}
