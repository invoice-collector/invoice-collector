
import { SketchCollector } from '../../sketchCollector';

export class HugoInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "hugo_internet",
        name: "Hugo Internet",
        description: "i18n.collectors.hugo_internet.description",
        version: "0",
        website: "http://www.hugointernet.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9480.jpg",
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
        entryUrl: "http://www.hugointernet.de",
    }

    constructor() {
        super(HugoInternetCollector.CONFIG);
    }
}
