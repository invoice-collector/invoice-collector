
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MobauWirtzAndClassenCollector extends SketchCollector {

    static CONFIG = {
        id: "mobau_wirtz_and_classen",
        name: "Mobau Wirtz & Classen",
        description: "i18n.collectors.mobau_wirtz_and_classen.description",
        version: "0",
        website: "https://www.mobau-wirtz-classen.de/beratung-service/kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2420743.jpg",
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
        entryUrl: "https://www.mobau-wirtz-classen.de/beratung-service/kundenportal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MobauWirtzAndClassenCollector.CONFIG);
    }
}
