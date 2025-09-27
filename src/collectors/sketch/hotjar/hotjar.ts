
import { SketchCollector } from '../../sketchCollector';

export class HotjarCollector extends SketchCollector {

    static CONFIG = {
        id: "hotjar",
        name: "hotjar",
        description: "i18n.collectors.hotjar.description",
        version: "0",
        website: "https://insights.hotjar.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8137.jpg",
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
        entryUrl: "https://insights.hotjar.com/login",
    }

    constructor() {
        super(HotjarCollector.CONFIG);
    }
}
