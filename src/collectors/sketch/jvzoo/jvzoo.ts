
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JvzooCollector extends SketchCollector {

    static CONFIG = {
        id: "jvzoo",
        name: "JVZoo",
        description: "i18n.collectors.jvzoo.description",
        version: "0",
        website: "https://customer.jvzoo.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116249.jpg",
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
        entryUrl: "https://customer.jvzoo.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JvzooCollector.CONFIG);
    }
}
