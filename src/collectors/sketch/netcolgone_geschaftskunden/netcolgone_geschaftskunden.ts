
import { SketchCollector } from '../../sketchCollector';

export class NetcolgoneGeschaftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "netcolgone_geschaftskunden",
        name: "NetColgone Geschaftskunden",
        description: "i18n.collectors.netcolgone_geschaftskunden.description",
        version: "0",
        website: "https://meinekundenwelt.netcologne.de/geschaeftskunden/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440629.jpg",
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
        entryUrl: "https://meinekundenwelt.netcologne.de/geschaeftskunden/rechnungen",
    }

    constructor() {
        super(NetcolgoneGeschaftskundenCollector.CONFIG);
    }
}
