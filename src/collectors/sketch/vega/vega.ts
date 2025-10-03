
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VegaCollector extends SketchCollector {

    static CONFIG = {
        id: "vega",
        name: "VEGA",
        description: "i18n.collectors.vega.description",
        version: "0",
        website: "https://www.vega-direct.com/de-de/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32758.jpg",
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
        entryUrl: "https://www.vega-direct.com/de-de/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VegaCollector.CONFIG);
    }
}
