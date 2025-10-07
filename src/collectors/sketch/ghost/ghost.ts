
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GhostCollector extends SketchCollector {

    static CONFIG = {
        id: "ghost",
        name: "ghost",
        description: "i18n.collectors.ghost.description",
        version: "0",
        website: "https://ghost.org/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32322.jpg",
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
        entryUrl: "https://ghost.org/signin/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GhostCollector.CONFIG);
    }
}
