
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmalyzeCollector extends SketchCollector {

    static CONFIG = {
        id: "amalyze",
        name: "AMALYZE",
        description: "i18n.collectors.amalyze.description",
        version: "0",
        website: "https://shield.amalyze.com/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29918.jpg",
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
        entryUrl: "https://shield.amalyze.com/auth/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmalyzeCollector.CONFIG);
    }
}
