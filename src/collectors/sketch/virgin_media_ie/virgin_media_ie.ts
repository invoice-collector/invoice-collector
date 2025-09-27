
import { SketchCollector } from '../../sketchCollector';

export class VirginMediaIeCollector extends SketchCollector {

    static CONFIG = {
        id: "virgin_media_ie",
        name: "Virgin Media IE",
        description: "i18n.collectors.virgin_media_ie.description",
        version: "0",
        website: "https://www.virginmedia.ie/sign-in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103282.jpg",
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
        entryUrl: "https://www.virginmedia.ie/sign-in",
    }

    constructor() {
        super(VirginMediaIeCollector.CONFIG);
    }
}
