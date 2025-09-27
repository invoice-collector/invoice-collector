
import { SketchCollector } from '../../sketchCollector';

export class TdSynnexCollector extends SketchCollector {

    static CONFIG = {
        id: "td_synnex",
        name: "TD Synnex",
        description: "i18n.collectors.td_synnex.description",
        version: "0",
        website: "https://intouch.tdsynnex.com/InTouch",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649607.jpg",
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
        entryUrl: "https://intouch.tdsynnex.com/InTouch",
    }

    constructor() {
        super(TdSynnexCollector.CONFIG);
    }
}
