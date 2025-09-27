
import { SketchCollector } from '../../sketchCollector';

export class HairfreeCollector extends SketchCollector {

    static CONFIG = {
        id: "hairfree",
        name: "hairfree",
        description: "i18n.collectors.hairfree.description",
        version: "0",
        website: "https://hairfree.idop.de/shop/index.php?controller=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976562.jpg",
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
        entryUrl: "https://hairfree.idop.de/shop/index.php?controller=history",
    }

    constructor() {
        super(HairfreeCollector.CONFIG);
    }
}
