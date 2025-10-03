
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RealDeCollector extends SketchCollector {

    static CONFIG = {
        id: "real_de",
        name: "real.de",
        description: "i18n.collectors.real_de.description",
        version: "0",
        website: "https://www.real.de/account/purchases/#unit_status=all&time_span=all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15276.jpg",
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
        entryUrl: "https://www.real.de/account/purchases/#unit_status=all&time_span=all",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RealDeCollector.CONFIG);
    }
}
