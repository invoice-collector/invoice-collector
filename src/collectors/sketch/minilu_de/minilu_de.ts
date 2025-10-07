
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MiniluDeCollector extends SketchCollector {

    static CONFIG = {
        id: "minilu_de",
        name: "minilu.de",
        description: "i18n.collectors.minilu_de.description",
        version: "0",
        website: "https://www.minilu.de/shop/de/fix/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47500.jpg",
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
        entryUrl: "https://www.minilu.de/shop/de/fix/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiniluDeCollector.CONFIG);
    }
}
