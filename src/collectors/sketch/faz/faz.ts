
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FazCollector extends SketchCollector {

    static CONFIG = {
        id: "faz",
        name: "FAZ",
        description: "i18n.collectors.faz.description",
        version: "0",
        website: "https://digitale-angebote.faz.net/selfservice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31967.jpg",
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
        entryUrl: "https://digitale-angebote.faz.net/selfservice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FazCollector.CONFIG);
    }
}
