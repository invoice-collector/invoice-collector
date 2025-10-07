
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VollenhovenCollector extends SketchCollector {

    static CONFIG = {
        id: "vollenhoven",
        name: "Vollenhoven",
        description: "i18n.collectors.vollenhoven.description",
        version: "0",
        website: "http://www.vollenhoven-ot.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32570.jpg",
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
        entryUrl: "http://www.vollenhoven-ot.nl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VollenhovenCollector.CONFIG);
    }
}
