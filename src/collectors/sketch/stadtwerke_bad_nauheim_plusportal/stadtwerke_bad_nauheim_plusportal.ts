
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeBadNauheimPlusportalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_bad_nauheim_plusportal",
        name: "Stadtwerke Bad Nauheim Plusportal",
        description: "i18n.collectors.stadtwerke_bad_nauheim_plusportal.description",
        version: "0",
        website: "https://stadtwerke-bad-nauheim.plusportal.de/#/devices/dsl/7749/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1526325.jpg",
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
        entryUrl: "https://stadtwerke-bad-nauheim.plusportal.de/#/devices/dsl/7749/invoices",
    }

    constructor() {
        super(StadtwerkeBadNauheimPlusportalCollector.CONFIG);
    }
}
