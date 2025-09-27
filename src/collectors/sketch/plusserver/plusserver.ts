
import { SketchCollector } from '../../sketchCollector';

export class PlusserverCollector extends SketchCollector {

    static CONFIG = {
        id: "plusserver",
        name: "plusserver",
        description: "i18n.collectors.plusserver.description",
        version: "0",
        website: "https://login.plusserver.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31091.jpg",
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
        entryUrl: "https://login.plusserver.com/en/login",
    }

    constructor() {
        super(PlusserverCollector.CONFIG);
    }
}
