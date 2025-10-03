
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MoqupsCollector extends SketchCollector {

    static CONFIG = {
        id: "moqups",
        name: "moqups",
        description: "i18n.collectors.moqups.description",
        version: "0",
        website: "https://app.moqups.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6644.jpg",
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
        entryUrl: "https://app.moqups.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MoqupsCollector.CONFIG);
    }
}
