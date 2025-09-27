
import { SketchCollector } from '../../sketchCollector';

export class FlashRcCollector extends SketchCollector {

    static CONFIG = {
        id: "flash_rc",
        name: "Flash RC",
        description: "i18n.collectors.flash_rc.description",
        version: "0",
        website: "https://www.flashrc.com/clients/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/429273.jpg",
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
        entryUrl: "https://www.flashrc.com/clients/",
    }

    constructor() {
        super(FlashRcCollector.CONFIG);
    }
}
