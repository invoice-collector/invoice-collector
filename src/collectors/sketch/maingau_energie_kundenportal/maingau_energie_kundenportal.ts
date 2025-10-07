
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaingauEnergieKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "maingau_energie_kundenportal",
        name: "Maingau Energie Kundenportal",
        description: "i18n.collectors.maingau_energie_kundenportal.description",
        version: "0",
        website: "https://kundenportal-internet.maingau-energie.de/DocumentArc/DocumentArchive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128493.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://kundenportal-internet.maingau-energie.de/DocumentArc/DocumentArchive",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaingauEnergieKundenportalCollector.CONFIG);
    }
}
