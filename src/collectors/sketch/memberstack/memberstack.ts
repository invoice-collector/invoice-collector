
import { SketchCollector } from '../../sketchCollector';

export class MemberstackCollector extends SketchCollector {

    static CONFIG = {
        id: "memberstack",
        name: "Memberstack",
        description: "i18n.collectors.memberstack.description",
        version: "0",
        website: "https://app.memberstack.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/830204.jpg",
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
        entryUrl: "https://app.memberstack.io/login",
    }

    constructor() {
        super(MemberstackCollector.CONFIG);
    }
}
