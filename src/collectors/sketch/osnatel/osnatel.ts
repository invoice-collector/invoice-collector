
import { SketchCollector } from '../../sketchCollector';

export class OsnatelCollector extends SketchCollector {

    static CONFIG = {
        id: "osnatel",
        name: "OsnaTel",
        description: "i18n.collectors.osnatel.description",
        version: "0",
        website: "https://login-tk.osnatel.de/module.php/ewetel/login.php?AuthState=_3c05279a3347209a4fc68ad9a92fdf601fd55ba8db%3Ahttps%3A%2F%2Flogin-tk.osnatel.de%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmein.osnatel.de%252Fosnatel%26cookieTime%3D",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9243.jpg",
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
        entryUrl: "https://login-tk.osnatel.de/module.php/ewetel/login.php?AuthState=_3c05279a3347209a4fc68ad9a92fdf601fd55ba8db%3Ahttps%3A%2F%2Flogin-tk.osnatel.de%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmein.osnatel.de%252Fosnatel%26cookieTime%3D",
    }

    constructor() {
        super(OsnatelCollector.CONFIG);
    }
}
