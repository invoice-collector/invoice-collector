
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Procheck24Collector extends SketchCollector {

    static CONFIG = {
        id: "procheck24",
        name: "Procheck24",
        description: "i18n.collectors.procheck24.description",
        version: "0",
        website: "http://www.procheck24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46119.jpg",
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
        entryUrl: "http://www.procheck24.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Procheck24Collector.CONFIG);
    }
}
