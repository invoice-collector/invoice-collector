
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LingoCollector extends SketchCollector {

    static CONFIG = {
        id: "lingo",
        name: "Lingo",
        description: "i18n.collectors.lingo.description",
        version: "0",
        website: "https://account.lingo.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976595.jpg",
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
        entryUrl: "https://account.lingo.com/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LingoCollector.CONFIG);
    }
}
