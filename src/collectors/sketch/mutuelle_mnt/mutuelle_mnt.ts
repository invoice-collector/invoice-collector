
import { SketchCollector } from '../../sketchCollector';

export class MutuelleMntCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mnt",
        name: "Mutuelle MNT",
        description: "i18n.collectors.mutuelle_mnt.description",
        version: "0",
        website: "https://adherents.mnt.fr/sign/connectAndRegister",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129821.jpg",
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
        entryUrl: "https://adherents.mnt.fr/sign/connectAndRegister",
    }

    constructor() {
        super(MutuelleMntCollector.CONFIG);
    }
}
