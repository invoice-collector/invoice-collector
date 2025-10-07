
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StoCollector extends SketchCollector {

    static CONFIG = {
        id: "sto",
        name: "sto",
        description: "i18n.collectors.sto.description",
        version: "0",
        website: "http://imatro.sto.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/426742.jpg",
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
        entryUrl: "http://imatro.sto.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StoCollector.CONFIG);
    }
}
