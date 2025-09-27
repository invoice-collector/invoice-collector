
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeGmbhBadKreuznachCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_gmbh_bad_kreuznach",
        name: "Stadtwerke GmbH Bad Kreuznach",
        description: "i18n.collectors.stadtwerke_gmbh_bad_kreuznach.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-kh.de/powercommerce/csit3/fo/portal/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1723356.jpg",
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
        entryUrl: "https://kundenportal.stadtwerke-kh.de/powercommerce/csit3/fo/portal/home",
    }

    constructor() {
        super(StadtwerkeGmbhBadKreuznachCollector.CONFIG);
    }
}
