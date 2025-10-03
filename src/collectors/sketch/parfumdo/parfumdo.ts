
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ParfumdoCollector extends SketchCollector {

    static CONFIG = {
        id: "parfumdo",
        name: "Parfumdo",
        description: "i18n.collectors.parfumdo.description",
        version: "0",
        website: "https://www.parfumdo.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122469.jpg",
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
        entryUrl: "https://www.parfumdo.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ParfumdoCollector.CONFIG);
    }
}
