
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EuropeRegistryCollector extends SketchCollector {

    static CONFIG = {
        id: "europe_registry",
        name: "Europe Registry",
        description: "i18n.collectors.europe_registry.description",
        version: "0",
        website: "https://www.europeregistry.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21707.jpg",
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
        entryUrl: "https://www.europeregistry.com/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EuropeRegistryCollector.CONFIG);
    }
}
