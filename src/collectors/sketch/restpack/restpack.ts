
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RestpackCollector extends SketchCollector {

    static CONFIG = {
        id: "restpack",
        name: "restpack",
        description: "i18n.collectors.restpack.description",
        version: "0",
        website: "https://restpack.io/console/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/988657.jpg",
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
        entryUrl: "https://restpack.io/console/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RestpackCollector.CONFIG);
    }
}
