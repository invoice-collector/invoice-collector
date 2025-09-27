
import { SketchCollector } from '../../sketchCollector';

export class MotoProfilSpZOOCollector extends SketchCollector {

    static CONFIG = {
        id: "moto_profil_sp_z_o_o",
        name: "Moto-Profil Sp. z o.o",
        description: "i18n.collectors.moto_profil_sp_z_o_o.description",
        version: "0",
        website: "https://id.profiauto.pl/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022362.jpg",
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
        entryUrl: "https://id.profiauto.pl/Account/Login",
    }

    constructor() {
        super(MotoProfilSpZOOCollector.CONFIG);
    }
}
