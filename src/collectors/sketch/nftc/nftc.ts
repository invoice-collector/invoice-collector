
import { SketchCollector } from '../../sketchCollector';

export class NftcCollector extends SketchCollector {

    static CONFIG = {
        id: "nftc",
        name: "NFTC",
        description: "i18n.collectors.nftc.description",
        version: "0",
        website: "https://frontenac.smarthub.coop/billPdfServlet/2020_05_1_82097127.pdf?account=82097127&timestamp=1588305600000&systemOfRecord=TELECOM",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/385972.jpg",
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
        entryUrl: "https://frontenac.smarthub.coop/billPdfServlet/2020_05_1_82097127.pdf?account=82097127&timestamp=1588305600000&systemOfRecord=TELECOM",
    }

    constructor() {
        super(NftcCollector.CONFIG);
    }
}
