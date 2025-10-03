
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpindriftCollector extends SketchCollector {

    static CONFIG = {
        id: "spindrift",
        name: "Spindrift",
        description: "i18n.collectors.spindrift.description",
        version: "0",
        website: "https://app.spindrift.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199061.jpg",
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
        entryUrl: "https://app.spindrift.io",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpindriftCollector.CONFIG);
    }
}
