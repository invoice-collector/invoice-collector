
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SolocalCollector extends SketchCollector {

    static CONFIG = {
        id: "solocal",
        name: "Solocal",
        description: "i18n.collectors.solocal.description",
        version: "0",
        website: "https://manager.solocal.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203068.jpg",
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
        entryUrl: "https://manager.solocal.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SolocalCollector.CONFIG);
    }
}
