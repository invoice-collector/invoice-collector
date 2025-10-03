
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BuchholzDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "buchholz_digital",
        name: "Buchholz Digital",
        description: "i18n.collectors.buchholz_digital.description",
        version: "0",
        website: "https://buchholz-digital.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1363254.jpg",
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
        entryUrl: "https://buchholz-digital.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BuchholzDigitalCollector.CONFIG);
    }
}
