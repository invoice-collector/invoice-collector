
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeAhrensburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_ahrensburg",
        name: "Stadtwerke Ahrensburg",
        description: "i18n.collectors.stadtwerke_ahrensburg.description",
        version: "0",
        website: "https://kundenportal-schlossmedia.stadtwerke-ahrensburg.de/#/payments-list?page=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2203319.jpg",
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
        entryUrl: "https://kundenportal-schlossmedia.stadtwerke-ahrensburg.de/#/payments-list?page=0",
    }

    constructor() {
        super(StadtwerkeAhrensburgCollector.CONFIG);
    }
}
