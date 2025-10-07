
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NexudusCollector extends SketchCollector {

    static CONFIG = {
        id: "nexudus",
        name: "NEXUDUS",
        description: "i18n.collectors.nexudus.description",
        version: "0",
        website: "https://platform.nexudus.com/auth/sign-in?continue_to=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034300.jpg",
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
        entryUrl: "https://platform.nexudus.com/auth/sign-in?continue_to=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NexudusCollector.CONFIG);
    }
}
