
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LueningCollector extends SketchCollector {

    static CONFIG = {
        id: "luening",
        name: "Luening",
        description: "i18n.collectors.luening.description",
        version: "0",
        website: "https://www.luening-24.de/de/mein-luening/rechnungen-lieferscheine-sonstige-liefer-belege/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213139.jpg",
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
        entryUrl: "https://www.luening-24.de/de/mein-luening/rechnungen-lieferscheine-sonstige-liefer-belege/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LueningCollector.CONFIG);
    }
}
