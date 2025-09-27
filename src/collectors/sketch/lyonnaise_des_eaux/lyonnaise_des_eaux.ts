
import { SketchCollector } from '../../sketchCollector';

export class LyonnaiseDesEauxCollector extends SketchCollector {

    static CONFIG = {
        id: "lyonnaise_des_eaux",
        name: "Lyonnaise des Eaux",
        description: "i18n.collectors.lyonnaise_des_eaux.description",
        version: "0",
        website: "https://www.toutsurmoneau.fr/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27332.jpg",
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
        entryUrl: "https://www.toutsurmoneau.fr/mon-compte-en-ligne/je-me-connecte",
    }

    constructor() {
        super(LyonnaiseDesEauxCollector.CONFIG);
    }
}
