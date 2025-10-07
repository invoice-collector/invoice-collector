
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ToyboxCollector extends SketchCollector {

    static CONFIG = {
        id: "toybox",
        name: "Toybox",
        description: "i18n.collectors.toybox.description",
        version: "0",
        website: "https://app.toyboxsystems.com/workspace/qgTIT3G9ggPY/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/414370.jpg",
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
        entryUrl: "https://app.toyboxsystems.com/workspace/qgTIT3G9ggPY/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToyboxCollector.CONFIG);
    }
}
