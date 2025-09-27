
import { SketchCollector } from '../../sketchCollector';

export class ClippingMagicCollector extends SketchCollector {

    static CONFIG = {
        id: "clipping_magic",
        name: "Clipping Magic",
        description: "i18n.collectors.clipping_magic.description",
        version: "0",
        website: "https://de.clippingmagic.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89130.jpg",
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
        entryUrl: "https://de.clippingmagic.com/account",
    }

    constructor() {
        super(ClippingMagicCollector.CONFIG);
    }
}
