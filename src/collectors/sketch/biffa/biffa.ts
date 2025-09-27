
import { SketchCollector } from '../../sketchCollector';

export class BiffaCollector extends SketchCollector {

    static CONFIG = {
        id: "biffa",
        name: "Biffa",
        description: "i18n.collectors.biffa.description",
        version: "0",
        website: "https://customerzone.biffa.co.uk/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/751042.jpg",
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
        entryUrl: "https://customerzone.biffa.co.uk/Login",
    }

    constructor() {
        super(BiffaCollector.CONFIG);
    }
}
