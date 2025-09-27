
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeFlensburgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_flensburg",
        name: "Stadtwerke Flensburg",
        description: "i18n.collectors.stadtwerke_flensburg.description",
        version: "0",
        website: "https://www.stadtwerke-flensburg.de/kundenportal/?page=login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9254.jpg",
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
        entryUrl: "https://www.stadtwerke-flensburg.de/kundenportal/?page=login",
    }

    constructor() {
        super(StadtwerkeFlensburgCollector.CONFIG);
    }
}
