
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SourcinboxCollector extends SketchCollector {

    static CONFIG = {
        id: "sourcinbox",
        name: "SourcinBox",
        description: "i18n.collectors.sourcinbox.description",
        version: "0",
        website: "https://app.sourcinbox.com/tickets/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1233806.jpg",
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
        entryUrl: "https://app.sourcinbox.com/tickets/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SourcinboxCollector.CONFIG);
    }
}
