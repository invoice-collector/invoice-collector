
import { SketchCollector } from '../../sketchCollector';

export class PanthermediaCollector extends SketchCollector {

    static CONFIG = {
        id: "panthermedia",
        name: "Panthermedia",
        description: "i18n.collectors.panthermedia.description",
        version: "0",
        website: "https://bildagentur.panthermedia.net/pm/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/397.jpg",
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
        entryUrl: "https://bildagentur.panthermedia.net/pm/sign-in",
    }

    constructor() {
        super(PanthermediaCollector.CONFIG);
    }
}
