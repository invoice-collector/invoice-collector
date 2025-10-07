
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerisanaCollector extends SketchCollector {

    static CONFIG = {
        id: "verisana",
        name: "Verisana",
        description: "i18n.collectors.verisana.description",
        version: "0",
        website: "https://www.verisana.de/my-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004073.jpg",
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
        entryUrl: "https://www.verisana.de/my-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerisanaCollector.CONFIG);
    }
}
