
import { SketchCollector } from '../../sketchCollector';

export class BauTechSolarenergieCollector extends SketchCollector {

    static CONFIG = {
        id: "bau_tech_solarenergie",
        name: "Bau-Tech Solarenergie",
        description: "i18n.collectors.bau_tech_solarenergie.description",
        version: "0",
        website: "https://www.bau-tech.shop/customer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248103.jpg",
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
        entryUrl: "https://www.bau-tech.shop/customer",
    }

    constructor() {
        super(BauTechSolarenergieCollector.CONFIG);
    }
}
