
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KokkuGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "kokku_gmbh",
        name: "kokku GmbH",
        description: "i18n.collectors.kokku_gmbh.description",
        version: "0",
        website: "https://kokku-online.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1101227.jpg",
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
        entryUrl: "https://kokku-online.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KokkuGmbhCollector.CONFIG);
    }
}
