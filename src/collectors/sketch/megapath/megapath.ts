
import { SketchCollector } from '../../sketchCollector';

export class MegapathCollector extends SketchCollector {

    static CONFIG = {
        id: "megapath",
        name: "MegaPath",
        description: "i18n.collectors.megapath.description",
        version: "0",
        website: "https://my.megapath.com/customeradmin/portal/login.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80277.jpg",
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
        entryUrl: "https://my.megapath.com/customeradmin/portal/login.do",
    }

    constructor() {
        super(MegapathCollector.CONFIG);
    }
}
