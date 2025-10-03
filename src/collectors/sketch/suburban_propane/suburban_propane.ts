
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SuburbanPropaneCollector extends SketchCollector {

    static CONFIG = {
        id: "suburban_propane",
        name: "Suburban Propane",
        description: "i18n.collectors.suburban_propane.description",
        version: "0",
        website: "https://account.suburbanpropane.com/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1444694.jpg",
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
        entryUrl: "https://account.suburbanpropane.com/statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SuburbanPropaneCollector.CONFIG);
    }
}
