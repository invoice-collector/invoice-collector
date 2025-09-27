
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeBarmstedtCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_barmstedt",
        name: "Stadtwerke Barmstedt",
        description: "i18n.collectors.stadtwerke_barmstedt.description",
        version: "0",
        website: "https://stadtwerke-barmstedt.de/xitylight/mein-xitylight/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9195.jpg",
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
        entryUrl: "https://stadtwerke-barmstedt.de/xitylight/mein-xitylight/",
    }

    constructor() {
        super(StadtwerkeBarmstedtCollector.CONFIG);
    }
}
