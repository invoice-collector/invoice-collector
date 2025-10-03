
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SwnStadtwerkeNeumunsterCollector extends SketchCollector {

    static CONFIG = {
        id: "swn_stadtwerke_neumunster",
        name: "SWN - Stadtwerke Neumunster",
        description: "i18n.collectors.swn_stadtwerke_neumunster.description",
        version: "0",
        website: "https://portal.swn.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973375.jpg",
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
        entryUrl: "https://portal.swn.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwnStadtwerkeNeumunsterCollector.CONFIG);
    }
}
