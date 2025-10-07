
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BipAndGoCollector extends SketchCollector {

    static CONFIG = {
        id: "bip_and_go",
        name: "Bip&Go",
        description: "i18n.collectors.bip_and_go.description",
        version: "0",
        website: "https://www.bipandgo.com/login_form?came_from=https%3A//www.bipandgo.com/mon_compte/&retry=&disable_cookie_login__=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27497.jpg",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BipAndGoCollector.CONFIG);
    }
}
