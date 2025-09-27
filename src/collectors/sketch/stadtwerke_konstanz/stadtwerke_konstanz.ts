
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeKonstanzCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_konstanz",
        name: "Stadtwerke Konstanz",
        description: "i18n.collectors.stadtwerke_konstanz.description",
        version: "0",
        website: "http://www.stadtwerke-konstanz.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9247.jpg",
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
        entryUrl: "http://www.stadtwerke-konstanz.de",
    }

    constructor() {
        super(StadtwerkeKonstanzCollector.CONFIG);
    }
}
