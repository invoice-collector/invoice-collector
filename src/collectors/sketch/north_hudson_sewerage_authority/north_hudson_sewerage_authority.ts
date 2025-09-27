
import { SketchCollector } from '../../sketchCollector';

export class NorthHudsonSewerageAuthorityCollector extends SketchCollector {

    static CONFIG = {
        id: "north_hudson_sewerage_authority",
        name: "North Hudson Sewerage Authority",
        description: "i18n.collectors.north_hudson_sewerage_authority.description",
        version: "0",
        website: "https://wipp.edmundsassoc.com/Wipp/?wippid=NHSA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3083798.jpg",
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
        entryUrl: "https://wipp.edmundsassoc.com/Wipp/?wippid=NHSA",
    }

    constructor() {
        super(NorthHudsonSewerageAuthorityCollector.CONFIG);
    }
}
