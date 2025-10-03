
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ErankCollector extends SketchCollector {

    static CONFIG = {
        id: "erank",
        name: "eRank",
        description: "i18n.collectors.erank.description",
        version: "0",
        website: "https://erank.com/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/772723.jpg",
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
        entryUrl: "https://erank.com/settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErankCollector.CONFIG);
    }
}
