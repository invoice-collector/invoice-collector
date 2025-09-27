
import { SketchCollector } from '../../sketchCollector';

export class WekaMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "weka_media",
        name: "WEKA MEDIA",
        description: "i18n.collectors.weka_media.description",
        version: "0",
        website: "http://www.weka.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54869.jpg",
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
        entryUrl: "http://www.weka.de",
    }

    constructor() {
        super(WekaMediaCollector.CONFIG);
    }
}
