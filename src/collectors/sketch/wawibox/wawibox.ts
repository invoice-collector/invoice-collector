
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WawiboxCollector extends SketchCollector {

    static CONFIG = {
        id: "wawibox",
        name: "wawibox",
        description: "i18n.collectors.wawibox.description",
        version: "0",
        website: "https://wawibox.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2155156.jpg",
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
        entryUrl: "https://wawibox.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WawiboxCollector.CONFIG);
    }
}
