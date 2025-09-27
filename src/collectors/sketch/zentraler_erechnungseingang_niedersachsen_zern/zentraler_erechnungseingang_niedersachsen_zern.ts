
import { SketchCollector } from '../../sketchCollector';

export class ZentralerErechnungseingangNiedersachsenZernCollector extends SketchCollector {

    static CONFIG = {
        id: "zentraler_erechnungseingang_niedersachsen_zern",
        name: "Zentraler eRechnungseingang Niedersachsen (ZeRN)",
        description: "i18n.collectors.zentraler_erechnungseingang_niedersachsen_zern.description",
        version: "0",
        website: "https://erechnung.niedersachsen.de/Identity/Account/Login?returnUrl=~/vorgang%2Fbfdd9a76-1545-4d77-964b-d823ba5ed29c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038758.jpg",
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
        entryUrl: "https://erechnung.niedersachsen.de/Identity/Account/Login?returnUrl=~/vorgang%2Fbfdd9a76-1545-4d77-964b-d823ba5ed29c",
    }

    constructor() {
        super(ZentralerErechnungseingangNiedersachsenZernCollector.CONFIG);
    }
}
