
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Spst1924Collector extends SketchCollector {

    static CONFIG = {
        id: "spst_19_24",
        name: "SPST 19 24",
        description: "i18n.collectors.spst_19_24.description",
        version: "0",
        website: "https://portailadherents.spst19-24.org/Documents/Invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503425.jpg",
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
        entryUrl: "https://portailadherents.spst19-24.org/Documents/Invoicing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Spst1924Collector.CONFIG);
    }
}
