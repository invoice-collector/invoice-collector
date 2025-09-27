
import { SketchCollector } from '../../sketchCollector';

export class FreikomDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freikom_de",
        name: "Freikom.de",
        description: "i18n.collectors.freikom_de.description",
        version: "0",
        website: "https://www2.purtel.com/res/res100165/index.php?link=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9331.jpg",
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
        entryUrl: "https://www2.purtel.com/res/res100165/index.php?link=login",
    }

    constructor() {
        super(FreikomDeCollector.CONFIG);
    }
}
