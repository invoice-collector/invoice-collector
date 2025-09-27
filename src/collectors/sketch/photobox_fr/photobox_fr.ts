
import { SketchCollector } from '../../sketchCollector';

export class PhotoboxFrCollector extends SketchCollector {

    static CONFIG = {
        id: "photobox_fr",
        name: "photobox.fr",
        description: "i18n.collectors.photobox_fr.description",
        version: "0",
        website: "http://www.photobox.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27323.jpg",
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
        entryUrl: "http://www.photobox.fr",
    }

    constructor() {
        super(PhotoboxFrCollector.CONFIG);
    }
}
