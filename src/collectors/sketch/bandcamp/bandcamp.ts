
import { SketchCollector } from '../../sketchCollector';

export class BandcampCollector extends SketchCollector {

    static CONFIG = {
        id: "bandcamp",
        name: "bandcamp",
        description: "i18n.collectors.bandcamp.description",
        version: "0",
        website: "https://bandcamp.com/kaykat/purchases",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/213129.jpg",
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
        entryUrl: "https://bandcamp.com/kaykat/purchases",
    }

    constructor() {
        super(BandcampCollector.CONFIG);
    }
}
