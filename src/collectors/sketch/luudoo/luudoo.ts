
import { SketchCollector } from '../../sketchCollector';

export class LuudooCollector extends SketchCollector {

    static CONFIG = {
        id: "luudoo",
        name: "LUUDOO",
        description: "i18n.collectors.luudoo.description",
        version: "0",
        website: "https://luudoo.com/admin_5esn7m/sales/invoice/index/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3006175.jpg",
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
        entryUrl: "https://luudoo.com/admin_5esn7m/sales/invoice/index/",
    }

    constructor() {
        super(LuudooCollector.CONFIG);
    }
}
