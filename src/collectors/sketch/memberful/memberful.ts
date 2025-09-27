
import { SketchCollector } from '../../sketchCollector';

export class MemberfulCollector extends SketchCollector {

    static CONFIG = {
        id: "memberful",
        name: "Memberful",
        description: "i18n.collectors.memberful.description",
        version: "0",
        website: "https://signin.memberful.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51117.jpg",
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
        entryUrl: "https://signin.memberful.com/",
    }

    constructor() {
        super(MemberfulCollector.CONFIG);
    }
}
