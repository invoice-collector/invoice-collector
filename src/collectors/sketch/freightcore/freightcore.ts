
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FreightcoreCollector extends SketchCollector {

    static CONFIG = {
        id: "freightcore",
        name: "FreightCore",
        description: "i18n.collectors.freightcore.description",
        version: "0",
        website: "https://app.freightcore.com/shipments/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4479649.jpg",
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
        entryUrl: "https://app.freightcore.com/shipments/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreightcoreCollector.CONFIG);
    }
}
