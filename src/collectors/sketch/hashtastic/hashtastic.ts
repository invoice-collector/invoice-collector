
import { SketchCollector } from '../../sketchCollector';

export class HashtasticCollector extends SketchCollector {

    static CONFIG = {
        id: "hashtastic",
        name: "Hashtastic",
        description: "i18n.collectors.hashtastic.description",
        version: "0",
        website: "https://app.hashtastic.eu/profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/758724.jpg",
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
        entryUrl: "https://app.hashtastic.eu/profile",
    }

    constructor() {
        super(HashtasticCollector.CONFIG);
    }
}
