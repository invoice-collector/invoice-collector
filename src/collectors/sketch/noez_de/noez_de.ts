
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NoezDeCollector extends SketchCollector {

    static CONFIG = {
        id: "noez_de",
        name: "noez.de",
        description: "i18n.collectors.noez_de.description",
        version: "0",
        website: "https://nas.noez.de/gate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/12011.jpg",
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
        entryUrl: "https://nas.noez.de/gate",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NoezDeCollector.CONFIG);
    }
}
