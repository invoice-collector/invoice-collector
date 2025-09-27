
import { SketchCollector } from '../../sketchCollector';

export class CalloneCollector extends SketchCollector {

    static CONFIG = {
        id: "callone",
        name: "CallOne",
        description: "i18n.collectors.callone.description",
        version: "0",
        website: "https://box.callone.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49815.jpg",
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
        entryUrl: "https://box.callone.de",
    }

    constructor() {
        super(CalloneCollector.CONFIG);
    }
}
