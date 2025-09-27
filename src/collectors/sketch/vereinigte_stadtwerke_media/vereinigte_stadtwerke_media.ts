
import { SketchCollector } from '../../sketchCollector';

export class VereinigteStadtwerkeMediaCollector extends SketchCollector {

    static CONFIG = {
        id: "vereinigte_stadtwerke_media",
        name: "Vereinigte Stadtwerke Media",
        description: "i18n.collectors.vereinigte_stadtwerke_media.description",
        version: "0",
        website: "https://mediaportal.vereinigte-stadtwerke.de/self-service/authentication/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148978.jpg",
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
        entryUrl: "https://mediaportal.vereinigte-stadtwerke.de/self-service/authentication/login",
    }

    constructor() {
        super(VereinigteStadtwerkeMediaCollector.CONFIG);
    }
}
