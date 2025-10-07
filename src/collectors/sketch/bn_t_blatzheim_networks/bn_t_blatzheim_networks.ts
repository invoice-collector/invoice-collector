
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BnTBlatzheimNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "bn_t_blatzheim_networks",
        name: "bn:t Blatzheim Networks",
        description: "i18n.collectors.bn_t_blatzheim_networks.description",
        version: "0",
        website: "https://my.bn-t.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9030.jpg",
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
        entryUrl: "https://my.bn-t.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BnTBlatzheimNetworksCollector.CONFIG);
    }
}
