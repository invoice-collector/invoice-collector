
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NwNaturalCollector extends SketchCollector {

    static CONFIG = {
        id: "nw_natural",
        name: "NW Natural",
        description: "i18n.collectors.nw_natural.description",
        version: "0",
        website: "http://www.nwnatural.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9341.jpg",
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
        entryUrl: "http://www.nwnatural.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NwNaturalCollector.CONFIG);
    }
}
