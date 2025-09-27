
import { SketchCollector } from '../../sketchCollector';

export class MaingauEnergieEnergieKundenportalCollector extends SketchCollector {

    static CONFIG = {
        id: "maingau_energie_energie_kundenportal",
        name: "Maingau Energie - Energie Kundenportal",
        description: "i18n.collectors.maingau_energie_energie_kundenportal.description",
        version: "0",
        website: "https://www.maingau-energie.de/strom",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3025357.jpg",
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
        entryUrl: "https://www.maingau-energie.de/strom",
    }

    constructor() {
        super(MaingauEnergieEnergieKundenportalCollector.CONFIG);
    }
}
