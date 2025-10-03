
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScalaraDeCollector extends SketchCollector {

    static CONFIG = {
        id: "scalara_de",
        name: "scalara.de",
        description: "i18n.collectors.scalara_de.description",
        version: "0",
        website: "https://app.scalara.de/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973286.jpg",
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
        entryUrl: "https://app.scalara.de/subscriptions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScalaraDeCollector.CONFIG);
    }
}
