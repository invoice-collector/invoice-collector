
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElvahCollector extends SketchCollector {

    static CONFIG = {
        id: "elvah",
        name: "Elvah",
        description: "i18n.collectors.elvah.description",
        version: "0",
        website: "https://account.elvah.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090210.jpg",
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
        entryUrl: "https://account.elvah.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElvahCollector.CONFIG);
    }
}
