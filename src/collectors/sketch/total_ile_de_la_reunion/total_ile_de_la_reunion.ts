
import { SketchCollector } from '../../sketchCollector';

export class TotalIleDeLaReunionCollector extends SketchCollector {

    static CONFIG = {
        id: "total_ile_de_la_reunion",
        name: "Total ile de la reunion",
        description: "i18n.collectors.total_ile_de_la_reunion.description",
        version: "0",
        website: "https://www.mytotalfuelcard.com/Client/app/index.html#!download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440785.jpg",
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
        entryUrl: "https://www.mytotalfuelcard.com/Client/app/index.html#!download",
    }

    constructor() {
        super(TotalIleDeLaReunionCollector.CONFIG);
    }
}
