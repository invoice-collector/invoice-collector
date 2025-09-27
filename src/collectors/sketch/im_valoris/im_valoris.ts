
import { SketchCollector } from '../../sketchCollector';

export class ImValorisCollector extends SketchCollector {

    static CONFIG = {
        id: "im_valoris",
        name: "IM.valoris",
        description: "i18n.collectors.im_valoris.description",
        version: "0",
        website: "https://extranet2.ics.fr/V5/connexion-imvaloris.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2214179.jpg",
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
        entryUrl: "https://extranet2.ics.fr/V5/connexion-imvaloris.html",
    }

    constructor() {
        super(ImValorisCollector.CONFIG);
    }
}
