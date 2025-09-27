
import { SketchCollector } from '../../sketchCollector';

export class PrettyLinksCollector extends SketchCollector {

    static CONFIG = {
        id: "pretty_links",
        name: "Pretty Links",
        description: "i18n.collectors.pretty_links.description",
        version: "0",
        website: "https://prettylinks.com/account/?action=payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3110537.jpg",
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
        entryUrl: "https://prettylinks.com/account/?action=payments",
    }

    constructor() {
        super(PrettyLinksCollector.CONFIG);
    }
}
