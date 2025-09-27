
import { SketchCollector } from '../../sketchCollector';

export class LoadboosterCollector extends SketchCollector {

    static CONFIG = {
        id: "loadbooster",
        name: "LoadBooster",
        description: "i18n.collectors.loadbooster.description",
        version: "0",
        website: "http://www.loadbooster.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37595.jpg",
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
        entryUrl: "http://www.loadbooster.com",
    }

    constructor() {
        super(LoadboosterCollector.CONFIG);
    }
}
