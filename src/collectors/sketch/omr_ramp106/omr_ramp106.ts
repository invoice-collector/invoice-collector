
import { SketchCollector } from '../../sketchCollector';

export class OmrRamp106Collector extends SketchCollector {

    static CONFIG = {
        id: "omr_ramp106",
        name: "OMR - ramp106",
        description: "i18n.collectors.omr_ramp106.description",
        version: "0",
        website: "https://omr.com/report/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/97758.jpg",
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
        entryUrl: "https://omr.com/report/mein-konto/",
    }

    constructor() {
        super(OmrRamp106Collector.CONFIG);
    }
}
