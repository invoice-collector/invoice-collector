
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhraseappCollector extends SketchCollector {

    static CONFIG = {
        id: "phraseapp",
        name: "PhraseApp",
        description: "i18n.collectors.phraseapp.description",
        version: "0",
        website: "https://phraseapp.com/de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18386.jpg",
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
        entryUrl: "https://phraseapp.com/de/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhraseappCollector.CONFIG);
    }
}
