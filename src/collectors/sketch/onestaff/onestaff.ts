
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnestaffCollector extends SketchCollector {

    static CONFIG = {
        id: "onestaff",
        name: "Onestaff",
        description: "i18n.collectors.onestaff.description",
        version: "0",
        website: "https://www.onestaff.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778787.jpg",
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
        entryUrl: "https://www.onestaff.eu/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnestaffCollector.CONFIG);
    }
}
