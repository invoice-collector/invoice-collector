
import { SketchCollector } from '../../sketchCollector';

export class ZervantCollector extends SketchCollector {

    static CONFIG = {
        id: "zervant",
        name: "Zervant",
        description: "i18n.collectors.zervant.description",
        version: "0",
        website: "https://secure.zervant.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/498.jpg",
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
        entryUrl: "https://secure.zervant.com/login/",
    }

    constructor() {
        super(ZervantCollector.CONFIG);
    }
}
