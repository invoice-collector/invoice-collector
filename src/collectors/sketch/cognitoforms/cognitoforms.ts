
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CognitoformsCollector extends SketchCollector {

    static CONFIG = {
        id: "cognitoforms",
        name: "CognitoFORMS",
        description: "i18n.collectors.cognitoforms.description",
        version: "0",
        website: "https://www.cognitoforms.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63806.jpg",
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
        entryUrl: "https://www.cognitoforms.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CognitoformsCollector.CONFIG);
    }
}
