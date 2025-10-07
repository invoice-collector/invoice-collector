
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IMaterialiseNlCollector extends SketchCollector {

    static CONFIG = {
        id: "i_materialise_nl",
        name: "i.materialise.nl",
        description: "i18n.collectors.i_materialise_nl.description",
        version: "0",
        website: "https://i.materialise.com/en/account/login?returnUrl=%2fen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32709.jpg",
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
        entryUrl: "https://i.materialise.com/en/account/login?returnUrl=%2fen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IMaterialiseNlCollector.CONFIG);
    }
}
