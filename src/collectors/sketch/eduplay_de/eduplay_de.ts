
import { SketchCollector } from '../../sketchCollector';

export class EduplayDeCollector extends SketchCollector {

    static CONFIG = {
        id: "eduplay_de",
        name: "Eduplay.de",
        description: "i18n.collectors.eduplay_de.description",
        version: "0",
        website: "https://shop.eduplay.de/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727953.jpg",
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
        entryUrl: "https://shop.eduplay.de/#",
    }

    constructor() {
        super(EduplayDeCollector.CONFIG);
    }
}
