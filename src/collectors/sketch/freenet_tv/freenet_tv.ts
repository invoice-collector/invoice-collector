
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FreenetTvCollector extends SketchCollector {

    static CONFIG = {
        id: "freenet_tv",
        name: "freenet TV",
        description: "i18n.collectors.freenet_tv.description",
        version: "0",
        website: "https://www.freenet.tv/mein-konto/bestelluebersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32601.jpg",
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
        entryUrl: "https://www.freenet.tv/mein-konto/bestelluebersicht",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreenetTvCollector.CONFIG);
    }
}
