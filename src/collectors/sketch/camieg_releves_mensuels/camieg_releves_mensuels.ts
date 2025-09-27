
import { SketchCollector } from '../../sketchCollector';

export class CamiegRelevesMensuelsCollector extends SketchCollector {

    static CONFIG = {
        id: "camieg_releves_mensuels",
        name: "Camieg (releves mensuels)",
        description: "i18n.collectors.camieg_releves_mensuels.description",
        version: "0",
        website: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125333.jpg",
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
        entryUrl: "https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_somtc=true",
    }

    constructor() {
        super(CamiegRelevesMensuelsCollector.CONFIG);
    }
}
