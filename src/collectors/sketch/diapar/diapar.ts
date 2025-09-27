
import { SketchCollector } from '../../sketchCollector';

export class DiaparCollector extends SketchCollector {

    static CONFIG = {
        id: "diapar",
        name: "DIAPAR",
        description: "i18n.collectors.diapar.description",
        version: "0",
        website: "https://www.intranet-diapar.com/se-connecter?destination=client/compta",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1667980.jpg",
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
        entryUrl: "https://www.intranet-diapar.com/se-connecter?destination=client/compta",
    }

    constructor() {
        super(DiaparCollector.CONFIG);
    }
}
