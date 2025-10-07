
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CleverbridgeCollector extends SketchCollector {

    static CONFIG = {
        id: "cleverbridge",
        name: "cleverbridge",
        description: "i18n.collectors.cleverbridge.description",
        version: "0",
        website: "https://grow.cleverbridge.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1087.jpg",
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
        entryUrl: "https://grow.cleverbridge.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CleverbridgeCollector.CONFIG);
    }
}
