
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DataminerCollector extends SketchCollector {

    static CONFIG = {
        id: "dataminer",
        name: "Dataminer",
        description: "i18n.collectors.dataminer.description",
        version: "0",
        website: "https://dataminer.io/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3274099.jpg",
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
        entryUrl: "https://dataminer.io/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DataminerCollector.CONFIG);
    }
}
