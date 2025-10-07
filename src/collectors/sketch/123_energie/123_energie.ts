
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _123EnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "123_energie",
        name: "123 Energie",
        description: "i18n.collectors.123_energie.description",
        version: "0",
        website: "https://www.123energie.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15363.jpg",
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
        entryUrl: "https://www.123energie.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123EnergieCollector.CONFIG);
    }
}
