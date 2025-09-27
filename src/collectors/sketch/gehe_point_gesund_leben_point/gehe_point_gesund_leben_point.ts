
import { SketchCollector } from '../../sketchCollector';

export class GehePointGesundLebenPointCollector extends SketchCollector {

    static CONFIG = {
        id: "gehe_point_gesund_leben_point",
        name: "Gehe Point - Gesund Leben Point",
        description: "i18n.collectors.gehe_point_gesund_leben_point.description",
        version: "0",
        website: "https://www.gehe-point.de/de/auswertungen/rechonline/esare/index.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/172782.jpg",
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
        entryUrl: "https://www.gehe-point.de/de/auswertungen/rechonline/esare/index.jsp",
    }

    constructor() {
        super(GehePointGesundLebenPointCollector.CONFIG);
    }
}
