
import { SketchCollector } from '../../sketchCollector';

export class PostmatesCollector extends SketchCollector {

    static CONFIG = {
        id: "postmates",
        name: "Postmates",
        description: "i18n.collectors.postmates.description",
        version: "0",
        website: "https://postmates.com/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71015.jpg",
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
        entryUrl: "https://postmates.com/orders",
    }

    constructor() {
        super(PostmatesCollector.CONFIG);
    }
}
