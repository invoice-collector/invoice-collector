
import { SketchCollector } from '../../sketchCollector';

export class AntecServicepoolGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "antec_servicepool_gmbh",
        name: "ANTEC Servicepool GmbH",
        description: "i18n.collectors.antec_servicepool_gmbh.description",
        version: "0",
        website: "https://webportal.antec-servicepool.de:1443/DocumentArc/DocumentArchive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/654747.jpg",
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
        entryUrl: "https://webportal.antec-servicepool.de:1443/DocumentArc/DocumentArchive",
    }

    constructor() {
        super(AntecServicepoolGmbhCollector.CONFIG);
    }
}
