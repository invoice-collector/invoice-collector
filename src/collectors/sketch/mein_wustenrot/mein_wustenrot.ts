
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeinWustenrotCollector extends SketchCollector {

    static CONFIG = {
        id: "mein_wustenrot",
        name: "Mein Wustenrot",
        description: "i18n.collectors.mein_wustenrot.description",
        version: "0",
        website: "https://www.wuestenrot.de/de/mein_wuestenrot.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/196418.jpg",
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
        entryUrl: "https://www.wuestenrot.de/de/mein_wuestenrot.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeinWustenrotCollector.CONFIG);
    }
}
