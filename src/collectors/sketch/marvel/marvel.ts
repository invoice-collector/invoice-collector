
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarvelCollector extends SketchCollector {

    static CONFIG = {
        id: "marvel",
        name: "Marvel",
        description: "i18n.collectors.marvel.description",
        version: "0",
        website: "https://marvelapp.com/user/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60383.jpg",
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
        entryUrl: "https://marvelapp.com/user/billing/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarvelCollector.CONFIG);
    }
}
