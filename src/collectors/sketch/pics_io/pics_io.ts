
import { SketchCollector } from '../../sketchCollector';

export class PicsIoCollector extends SketchCollector {

    static CONFIG = {
        id: "pics_io",
        name: "pics.io",
        description: "i18n.collectors.pics_io.description",
        version: "0",
        website: "https://pics.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/530560.jpg",
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
        entryUrl: "https://pics.io/",
    }

    constructor() {
        super(PicsIoCollector.CONFIG);
    }
}
