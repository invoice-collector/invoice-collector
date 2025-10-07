
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SepaheldCollector extends SketchCollector {

    static CONFIG = {
        id: "sepaheld",
        name: "SepaHeld",
        description: "i18n.collectors.sepaheld.description",
        version: "0",
        website: "https://app.sepaheld.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919964.jpg",
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
        entryUrl: "https://app.sepaheld.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SepaheldCollector.CONFIG);
    }
}
