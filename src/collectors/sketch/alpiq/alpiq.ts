
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlpiqCollector extends SketchCollector {

    static CONFIG = {
        id: "alpiq",
        name: "ALPIQ",
        description: "i18n.collectors.alpiq.description",
        version: "0",
        website: "https://meine-energie.alpiq.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192213.jpg",
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
        entryUrl: "https://meine-energie.alpiq.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlpiqCollector.CONFIG);
    }
}
