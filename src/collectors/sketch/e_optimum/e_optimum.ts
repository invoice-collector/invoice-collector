
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EOptimumCollector extends SketchCollector {

    static CONFIG = {
        id: "e_optimum",
        name: "e.optimum",
        description: "i18n.collectors.e_optimum.description",
        version: "0",
        website: "https://mitglieder.eoptimum.de/mitgliederportal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52279.jpg",
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
        entryUrl: "https://mitglieder.eoptimum.de/mitgliederportal/start",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EOptimumCollector.CONFIG);
    }
}
