
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PostcronCollector extends SketchCollector {

    static CONFIG = {
        id: "postcron",
        name: "Postcron",
        description: "i18n.collectors.postcron.description",
        version: "0",
        website: "https://postcron.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37093.jpg",
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
        entryUrl: "https://postcron.com/en/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PostcronCollector.CONFIG);
    }
}
