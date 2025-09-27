
import { SketchCollector } from '../../sketchCollector';

export class MotorolAutomotiveSpZOOCollector extends SketchCollector {

    static CONFIG = {
        id: "motorol_automotive_sp_z_o_o",
        name: "MOTOROL Automotive Sp. z o. o",
        description: "i18n.collectors.motorol_automotive_sp_z_o_o.description",
        version: "0",
        website: "https://ezamowienia.motorol.pl/customers/documents.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022412.jpg",
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
        entryUrl: "https://ezamowienia.motorol.pl/customers/documents.aspx",
    }

    constructor() {
        super(MotorolAutomotiveSpZOOCollector.CONFIG);
    }
}
