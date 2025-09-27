
import { SketchCollector } from '../../sketchCollector';

export class MutuelleDuSoleilAdherentCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_du_soleil_adherent",
        name: "Mutuelle Du Soleil - adherent",
        description: "i18n.collectors.mutuelle_du_soleil_adherent.description",
        version: "0",
        website: "https://adherents.mutuellesdusoleil.fr/login#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127690.jpg",
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
        entryUrl: "https://adherents.mutuellesdusoleil.fr/login#/",
    }

    constructor() {
        super(MutuelleDuSoleilAdherentCollector.CONFIG);
    }
}
