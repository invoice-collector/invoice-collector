
import { SketchCollector } from '../../sketchCollector';

export class ArtlistIoCollector extends SketchCollector {

    static CONFIG = {
        id: "artlist_io",
        name: "Artlist.io",
        description: "i18n.collectors.artlist_io.description",
        version: "0",
        website: "https://artlist.io/page/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21941.jpg",
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
        entryUrl: "https://artlist.io/page/signin",
    }

    constructor() {
        super(ArtlistIoCollector.CONFIG);
    }
}
