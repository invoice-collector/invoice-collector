
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DareboostCollector extends SketchCollector {

    static CONFIG = {
        id: "dareboost",
        name: "Dareboost",
        description: "i18n.collectors.dareboost.description",
        version: "0",
        website: "https://www.dareboost.com/en/profile/#bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/388003.jpg",
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
        entryUrl: "https://www.dareboost.com/en/profile/#bills",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DareboostCollector.CONFIG);
    }
}
