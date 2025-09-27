
import { SketchCollector } from '../../sketchCollector';

export class BipAndGoCollector extends SketchCollector {

    static CONFIG = {
        id: "bip_and_go",
        name: "Bip&Go",
        description: "i18n.collectors.bip_and_go.description",
        version: "0",
        website: "https://www.bipandgo.com/login_form?came_from=https%3A//www.bipandgo.com/mon_compte/&retry=&disable_cookie_login__=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27497.jpg",
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
        entryUrl: "https://www.bipandgo.com/login_form?came_from=https%3A//www.bipandgo.com/mon_compte/&retry=&disable_cookie_login__=1",
    }

    constructor() {
        super(BipAndGoCollector.CONFIG);
    }
}
