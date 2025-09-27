
import { SketchCollector } from '../../sketchCollector';

export class SlideshareCollector extends SketchCollector {

    static CONFIG = {
        id: "slideshare",
        name: "SlideShare",
        description: "i18n.collectors.slideshare.description",
        version: "0",
        website: "https://www.slideshare.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138192.jpg",
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
        entryUrl: "https://www.slideshare.net/login",
    }

    constructor() {
        super(SlideshareCollector.CONFIG);
    }
}
