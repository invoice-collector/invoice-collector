
import { SketchCollector } from '../../sketchCollector';

export class WpmanageninjaCollector extends SketchCollector {

    static CONFIG = {
        id: "wpmanageninja",
        name: "WPManageNinja",
        description: "i18n.collectors.wpmanageninja.description",
        version: "0",
        website: "https://wpmanageninja.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/743315.jpg",
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
        entryUrl: "https://wpmanageninja.com/account/",
    }

    constructor() {
        super(WpmanageninjaCollector.CONFIG);
    }
}
