
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FasthostsCollector extends SketchCollector {

    static CONFIG = {
        id: "fasthosts",
        name: "fasthosts",
        description: "i18n.collectors.fasthosts.description",
        version: "0",
        website: "https://admin.fasthosts.co.uk/Auth/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8777.jpg",
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
        entryUrl: "https://admin.fasthosts.co.uk/Auth/Login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FasthostsCollector.CONFIG);
    }
}
