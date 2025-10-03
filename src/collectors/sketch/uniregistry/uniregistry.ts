
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UniregistryCollector extends SketchCollector {

    static CONFIG = {
        id: "uniregistry",
        name: "uniregistry",
        description: "i18n.collectors.uniregistry.description",
        version: "0",
        website: "https://uniregistry.com/account-login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53923.jpg",
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
        entryUrl: "https://uniregistry.com/account-login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UniregistryCollector.CONFIG);
    }
}
