
import { SketchCollector } from '../../sketchCollector';

export class RheinZeitungKoblenzAnzeigenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "rhein_zeitung_koblenz_anzeigenportal",
        name: "Rhein-Zeitung Koblenz Anzeigenportal",
        description: "i18n.collectors.rhein_zeitung_koblenz_anzeigenportal.description",
        version: "0",
        website: "https://anzeigen.rhein-zeitung.de/webstore/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349407.jpg",
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
        entryUrl: "https://anzeigen.rhein-zeitung.de/webstore/",
    }

    constructor() {
        super(RheinZeitungKoblenzAnzeigenportalCollector.CONFIG);
    }
}
