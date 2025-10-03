
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GridscaleCollector extends SketchCollector {

    static CONFIG = {
        id: "gridscale",
        name: "gridscale",
        description: "i18n.collectors.gridscale.description",
        version: "0",
        website: "https://my.gridscale.io/?lang=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20621.jpg",
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
        entryUrl: "https://my.gridscale.io/?lang=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GridscaleCollector.CONFIG);
    }
}
