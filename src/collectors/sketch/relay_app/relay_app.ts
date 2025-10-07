
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RelayAppCollector extends SketchCollector {

    static CONFIG = {
        id: "relay_app",
        name: "Relay.app",
        description: "i18n.collectors.relay_app.description",
        version: "0",
        website: "https://run.relay.app/dashboard#/settings/workspace/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4506757.jpg",
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
        entryUrl: "https://run.relay.app/dashboard#/settings/workspace/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RelayAppCollector.CONFIG);
    }
}
