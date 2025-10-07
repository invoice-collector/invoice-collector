
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MightyNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "mighty_networks",
        name: "Mighty Networks",
        description: "i18n.collectors.mighty_networks.description",
        version: "0",
        website: "https://mightynetworks.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/541211.jpg",
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
        entryUrl: "https://mightynetworks.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MightyNetworksCollector.CONFIG);
    }
}
