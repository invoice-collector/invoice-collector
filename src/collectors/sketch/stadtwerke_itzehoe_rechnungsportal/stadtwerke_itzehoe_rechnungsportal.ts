
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeItzehoeRechnungsportalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_itzehoe_rechnungsportal",
        name: "Stadtwerke Itzehoe Rechnungsportal",
        description: "i18n.collectors.stadtwerke_itzehoe_rechnungsportal.description",
        version: "0",
        website: "https://service.iz-kom.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1986225.jpg",
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
        entryUrl: "https://service.iz-kom.de/",
    }

    constructor() {
        super(StadtwerkeItzehoeRechnungsportalCollector.CONFIG);
    }
}
