
import { SketchCollector } from '../../sketchCollector';

export class FondsnetCollector extends SketchCollector {

    static CONFIG = {
        id: "fondsnet",
        name: "Fondsnet",
        description: "i18n.collectors.fondsnet.description",
        version: "0",
        website: "https://fondsnet.depotplattform.de/vertriebspartner/abwicklung_provisionsabrechnung.php?mId=102",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68982.jpg",
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
        entryUrl: "https://fondsnet.depotplattform.de/vertriebspartner/abwicklung_provisionsabrechnung.php?mId=102",
    }

    constructor() {
        super(FondsnetCollector.CONFIG);
    }
}
