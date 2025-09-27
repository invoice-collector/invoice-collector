
import { SketchCollector } from '../../sketchCollector';

export class EntegaMedianetCollector extends SketchCollector {

    static CONFIG = {
        id: "entega_medianet",
        name: "Entega-Medianet",
        description: "i18n.collectors.entega_medianet.description",
        version: "0",
        website: "http://www.entega-medianet.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51058.jpg",
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
        entryUrl: "http://www.entega-medianet.de",
    }

    constructor() {
        super(EntegaMedianetCollector.CONFIG);
    }
}
