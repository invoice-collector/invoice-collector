
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AdcrowdCollector extends SketchCollector {

    static CONFIG = {
        id: "adcrowd",
        name: "Adcrowd",
        description: "i18n.collectors.adcrowd.description",
        version: "0",
        website: "http://www.adcrowd.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32675.jpg",
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
        entryUrl: "http://www.adcrowd.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdcrowdCollector.CONFIG);
    }
}
