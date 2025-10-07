
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IndisplayHandelsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "indisplay_handels_gmbh",
        name: "Indisplay Handels GmbH",
        description: "i18n.collectors.indisplay_handels_gmbh.description",
        version: "0",
        website: "https://www.indisplay.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203082.jpg",
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
        entryUrl: "https://www.indisplay.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IndisplayHandelsGmbhCollector.CONFIG);
    }
}
