
import { SketchCollector } from '../../sketchCollector';

export class BuchholzFachinformationsdienstCollector extends SketchCollector {

    static CONFIG = {
        id: "buchholz_fachinformationsdienst",
        name: "Buchholz Fachinformationsdienst",
        description: "i18n.collectors.buchholz_fachinformationsdienst.description",
        version: "0",
        website: "https://partner.bfd-online.info/mybfd/acl_users/credentials_cookie_auth/require_login?came_from=https://partner.bfd-online.info/mybfd/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/95138.jpg",
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
        entryUrl: "https://partner.bfd-online.info/mybfd/acl_users/credentials_cookie_auth/require_login?came_from=https://partner.bfd-online.info/mybfd/",
    }

    constructor() {
        super(BuchholzFachinformationsdienstCollector.CONFIG);
    }
}
