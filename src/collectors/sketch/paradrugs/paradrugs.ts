
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParadrugsCollector extends SketchCollector {

    static CONFIG = {
        id: "paradrugs",
        name: "Paradrugs",
        description: "i18n.collectors.paradrugs.description",
        version: "0",
        website: "https://www.paradrugs.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122470.jpg",
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
        entryUrl: "https://www.paradrugs.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParadrugsCollector.CONFIG);
    }
}
