
import { SketchCollector } from '../../sketchCollector';

export class PswGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "psw_group",
        name: "PSW Group",
        description: "i18n.collectors.psw_group.description",
        version: "0",
        website: "http://www.psw.net",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7903.jpg",
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
        entryUrl: "http://www.psw.net",
    }

    constructor() {
        super(PswGroupCollector.CONFIG);
    }
}
