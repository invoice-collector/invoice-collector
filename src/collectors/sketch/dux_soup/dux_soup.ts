
import { SketchCollector } from '../../sketchCollector';

export class DuxSoupCollector extends SketchCollector {

    static CONFIG = {
        id: "dux_soup",
        name: "DUX SOUP",
        description: "i18n.collectors.dux_soup.description",
        version: "0",
        website: "https://app.dux-soup.com/web/dux-profile",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396881.jpg",
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
        entryUrl: "https://app.dux-soup.com/web/dux-profile",
    }

    constructor() {
        super(DuxSoupCollector.CONFIG);
    }
}
