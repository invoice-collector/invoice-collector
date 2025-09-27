
import { SketchCollector } from '../../sketchCollector';

export class SimpleboCollector extends SketchCollector {

    static CONFIG = {
        id: "simplebo",
        name: "Simplebo",
        description: "i18n.collectors.simplebo.description",
        version: "0",
        website: "https://compte.simplebo.net/sites-internet/mes-sites/Sh_Of6Ohn-hBbjb8T_n6nQ/tableau-de-bord",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2693855.jpg",
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
        entryUrl: "https://compte.simplebo.net/sites-internet/mes-sites/Sh_Of6Ohn-hBbjb8T_n6nQ/tableau-de-bord",
    }

    constructor() {
        super(SimpleboCollector.CONFIG);
    }
}
