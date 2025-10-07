
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StreamfitCollector extends SketchCollector {

    static CONFIG = {
        id: "streamfit",
        name: "StreamFit",
        description: "i18n.collectors.streamfit.description",
        version: "0",
        website: "https://go.streamfit.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654381.jpg",
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
        entryUrl: "https://go.streamfit.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StreamfitCollector.CONFIG);
    }
}
