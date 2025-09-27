
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeTrostbergCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_trostberg",
        name: "Stadtwerke Trostberg",
        description: "i18n.collectors.stadtwerke_trostberg.description",
        version: "0",
        website: "http://www.stadtwerke-trostberg.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9454.jpg",
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
        entryUrl: "http://www.stadtwerke-trostberg.de",
    }

    constructor() {
        super(StadtwerkeTrostbergCollector.CONFIG);
    }
}
