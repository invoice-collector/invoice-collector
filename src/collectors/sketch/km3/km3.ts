
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Km3Collector extends SketchCollector {

    static CONFIG = {
        id: "km3",
        name: "km3",
        description: "i18n.collectors.km3.description",
        version: "0",
        website: "https://www.internet.km3.de/Login/007-28062/007-28062/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552932.jpg",
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
        entryUrl: "https://www.internet.km3.de/Login/007-28062/007-28062/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Km3Collector.CONFIG);
    }
}
