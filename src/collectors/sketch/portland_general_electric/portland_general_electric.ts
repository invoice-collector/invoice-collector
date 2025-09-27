
import { SketchCollector } from '../../sketchCollector';

export class PortlandGeneralElectricCollector extends SketchCollector {

    static CONFIG = {
        id: "portland_general_electric",
        name: "Portland General Electric",
        description: "i18n.collectors.portland_general_electric.description",
        version: "0",
        website: "http://www.portlandgeneral.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8994.jpg",
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
        entryUrl: "http://www.portlandgeneral.com",
    }

    constructor() {
        super(PortlandGeneralElectricCollector.CONFIG);
    }
}
