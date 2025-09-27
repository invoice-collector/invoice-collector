
import { SketchCollector } from '../../sketchCollector';

export class RinggoCollector extends SketchCollector {

    static CONFIG = {
        id: "ringgo",
        name: "RingGo",
        description: "i18n.collectors.ringgo.description",
        version: "0",
        website: "https://www.myringgo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68971.jpg",
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
        entryUrl: "https://www.myringgo.com/login",
    }

    constructor() {
        super(RinggoCollector.CONFIG);
    }
}
