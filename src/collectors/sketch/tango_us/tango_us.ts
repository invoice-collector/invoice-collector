
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TangoUsCollector extends SketchCollector {

    static CONFIG = {
        id: "tango_us",
        name: "Tango.us",
        description: "i18n.collectors.tango_us.description",
        version: "0",
        website: "https://app.tango.us/app/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732523.jpg",
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
        entryUrl: "https://app.tango.us/app/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TangoUsCollector.CONFIG);
    }
}
