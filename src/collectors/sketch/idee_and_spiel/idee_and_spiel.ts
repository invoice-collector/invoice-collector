
import { SketchCollector } from '../../sketchCollector';

export class IdeeAndSpielCollector extends SketchCollector {

    static CONFIG = {
        id: "idee_and_spiel",
        name: "Idee & Spiel",
        description: "i18n.collectors.idee_and_spiel.description",
        version: "0",
        website: "https://portal.ideeundspiel.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/54871.jpg",
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
        entryUrl: "https://portal.ideeundspiel.com/login",
    }

    constructor() {
        super(IdeeAndSpielCollector.CONFIG);
    }
}
