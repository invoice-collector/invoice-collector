
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MagnetNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "magnet_networks",
        name: "Magnet Networks",
        description: "i18n.collectors.magnet_networks.description",
        version: "0",
        website: "https://www.magnetnetworks.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745713.jpg",
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
        entryUrl: "https://www.magnetnetworks.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MagnetNetworksCollector.CONFIG);
    }
}
