
import { SketchCollector } from '../../sketchCollector';

export class DnNoCollector extends SketchCollector {

    static CONFIG = {
        id: "dn_no",
        name: "dn.no",
        description: "i18n.collectors.dn_no.description",
        version: "0",
        website: "https://www.dn.no/auth/user/login?target=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203129.jpg",
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
        entryUrl: "https://www.dn.no/auth/user/login?target=%2F",
    }

    constructor() {
        super(DnNoCollector.CONFIG);
    }
}
