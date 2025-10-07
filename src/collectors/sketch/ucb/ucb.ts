
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UcbCollector extends SketchCollector {

    static CONFIG = {
        id: "ucb",
        name: "UCB",
        description: "i18n.collectors.ucb.description",
        version: "0",
        website: "https://www.ucb.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67537.jpg",
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
        entryUrl: "https://www.ucb.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UcbCollector.CONFIG);
    }
}
