
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WritesonicCollector extends SketchCollector {

    static CONFIG = {
        id: "writesonic",
        name: "writesonic",
        description: "i18n.collectors.writesonic.description",
        version: "0",
        website: "https://app.writesonic.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066475.jpg",
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
        entryUrl: "https://app.writesonic.com/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WritesonicCollector.CONFIG);
    }
}
